// frontend/__tests__/projectInitialization.test.js

const { exec } = require('child_process');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

describe('Project Initialization with Next.js', () => {
  const repoUrl = 'https://github.com/ad3002/EduTrack.git';
  const clonePath = path.join(__dirname, '..', 'tempRepo');
  const frontendPath = path.join(clonePath, 'frontend');

  beforeAll((done) => {
    // Clone the repository
    exec(`git clone ${repoUrl} ${clonePath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Cloning failed: ${stderr}`);
        done(error);
      } else {
        console.log(`Cloning successful: ${stdout}`);
        done();
      }
    });
  }, 60000); // Increase timeout for cloning

  afterAll((done) => {
    // Remove the cloned repository
    fs.rm(clonePath, { recursive: true, force: true }, (err) => {
      if (err) {
        console.error(`Cleanup failed: ${err}`);
        done(err);
      } else {
        console.log('Cleanup successful');
        done();
      }
    });
  });

  test('Run npm install without errors', (done) => {
    exec('npm install', { cwd: frontendPath }, (error, stdout, stderr) => {
      if (error) {
        console.error(`npm install failed: ${stderr}`);
        done(error);
      } else {
        console.log(`npm install successful: ${stdout}`);
        done();
      }
    });
  }, 60000); // Increase timeout for npm install

  test('Start development server and verify accessibility', (done) => {
    const server = exec('npm run dev', { cwd: frontendPath });

    // Wait for the server to start
    setTimeout(async () => {
      try {
        const response = await axios.get('http://localhost:3000');
        expect(response.status).toBe(200);
        server.kill();
        done();
      } catch (err) {
        server.kill();
        done(err);
      }
    }, 10000); // Wait 10 seconds for the server to start
  }, 20000); // Increase timeout for server start and response
});