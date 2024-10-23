// frontend/__tests__/ciCdConfiguration.test.js

const { exec } = require('child_process');
const { Octokit } = require('@octokit/rest');
const path = require('path');

describe('CI/CD Configuration for Frontend', () => {
  const repoPath = path.join(__dirname, '..');
  const branch = 'develop';
  const commitMessage = 'Test commit for CI/CD';
  const filePath = path.join(repoPath, 'README.md'); // Ensure README.md exists
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const owner = 'your-github-username'; // Replace with your GitHub username
  const repo = 'EduTrack'; // Replace with your repository name

  beforeAll((done) => {
    // Checkout to the develop branch
    exec(`git checkout ${branch}`, { cwd: repoPath }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Checkout failed: ${stderr}`);
        done(error);
      } else {
        console.log(`Checked out to ${branch}: ${stdout}`);
        done();
      }
    });
  });

  afterAll((done) => {
    // Revert the test commit
    exec('git reset --hard HEAD~1', { cwd: repoPath }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Reset failed: ${stderr}`);
        done(error);
      } else {
        console.log(`Reset successful: ${stdout}`);
        done();
      }
    });
  });

  test('CI/CD pipeline triggers on push and deploys frontend', async () => {
    // Make a test commit
    await new Promise((resolve, reject) => {
      exec(`echo "Test CI/CD commit" >> ${filePath}`, { cwd: repoPath }, (error, stdout, stderr) => {
        if (error) {
          console.error(`Failed to modify file: ${stderr}`);
          reject(error);
        } else {
          exec('git add .', { cwd: repoPath }, (error, stdout, stderr) => {
            if (error) {
              console.error(`Git add failed: ${stderr}`);
              reject(error);
            } else {
              exec(`git commit -m "${commitMessage}"`, { cwd: repoPath }, (error, stdout, stderr) => {
                if (error) {
                  console.error(`Git commit failed: ${stderr}`);
                  reject(error);
                } else {
                  exec('git push origin develop', { cwd: repoPath }, (error, stdout, stderr) => {
                    if (error) {
                      console.error(`Git push failed: ${stderr}`);
                      reject(error);
                    } else {
                      console.log(`Git push successful: ${stdout}`);
                      resolve();
                    }
                  });
                }
              });
            }
          });
        }
      });
    });

    // Wait for GitHub Actions to trigger
    await new Promise(resolve => setTimeout(resolve, 60000)); // Wait 60 seconds

    // Fetch workflows
    const workflows = await octokit.actions.listRepoWorkflows({
      owner,
      repo,
    });

    const deployWorkflow = workflows.data.workflows.find(wf => wf.name === 'Frontend Deploy');

    expect(deployWorkflow).toBeDefined();

    // Fetch the latest workflow run
    const workflowRuns = await octokit.actions.listWorkflowRuns({
      owner,
      repo,
      workflow_id: deployWorkflow.id,
      branch,
      event: 'push',
      per_page: 1,
    });

    const latestRun = workflowRuns.data.workflow_runs[0];
    expect(latestRun).toBeDefined();
    expect(latestRun.conclusion).toBe('success');
  }, 180000); // 3 minutes timeout
});