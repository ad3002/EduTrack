# **QA Test Specification Document for Sprint 1**

## **Project Overview**

**Application Name:**  
**EduTrack** – An application for tracking student performance, lecture attendance, and chat activity with gamification elements.

**Sprint 1 Focus:**  
Setting up the foundational aspects of the EduTrack project, including repository configuration, server infrastructure setup, and initial project structure for both backend and frontend.

---

## **1. Introduction**

This document outlines the test specification for **Sprint 1** of the EduTrack project. It provides a comprehensive guide for the QA Engineer to verify that all frontend and backend setup tasks have been completed successfully and meet the defined requirements.

## **2. Objectives**

- **Validate Frontend Setup:**
  - Ensure that the Next.js project is initialized correctly.
  - Verify the integration and configuration of Tailwind CSS.
  - Confirm the basic project structure and the presence of essential components.
  - Test the CI/CD pipeline for frontend deployment.

- **Validate Backend Setup:**
  - Ensure that the FastAPI backend is configured correctly.
  - Verify the project structure and the setup of essential backend components.
  - Test the CI/CD pipeline for backend deployment.

- **Ensure Repository and Infrastructure Configuration:**
  - Confirm that the GitHub repository is set up with the correct branching strategy.
  - Verify server configurations, including Nginx proxy settings.

## **3. Scope**

### **Included in Testing:**

- Frontend Initialization with Next.js and Tailwind CSS.
- Backend Initialization with FastAPI and PostgreSQL.
- GitHub repository setup and branching.
- CI/CD workflows for both frontend and backend.
- Basic project structures for frontend and backend.
- Server configuration with Nginx.

### **Excluded from Testing:**

- Detailed functional features beyond the basic setup.
- Advanced security configurations.
- Performance testing.

## **4. Test Items**

### **Frontend:**

1. **Repository Setup**
2. **Project Initialization with Next.js**
3. **Tailwind CSS Integration**
4. **Basic Project Structure**
5. **CI/CD Configuration for Frontend**
6. **Basic Welcome Page**

### **Backend:**

1. **Repository Setup**
2. **Project Initialization with FastAPI**
3. **Database Configuration with PostgreSQL**
4. **Basic Project Structure**
5. **CI/CD Configuration for Backend**
6. **Basic Welcome Endpoint**

### **Infrastructure:**

1. **GitHub Repository and Branching**
2. **Nginx Configuration**
3. **Server Environment Setup**

## **5. Testing Strategy**

The QA Engineer will perform the following types of testing:

- **Functional Testing:** Verify that each setup task functions as intended.
- **Integration Testing:** Ensure that frontend and backend setups integrate smoothly.
- **CI/CD Pipeline Testing:** Confirm that automated workflows trigger and execute correctly.
- **Environment Verification:** Check that server and repository configurations meet specifications.

## **6. Test Cases**

### **6.1. Frontend Testing**

#### **6.1.1. Repository Setup**

- **Test Case ID:** FE-01
- **Title:** Verify Frontend Repository Setup
- **Preconditions:** Access to the GitHub repository.
- **Steps:**
  1. Navigate to the GitHub repository `EduTrack`.
  2. Check for the presence of `frontend/` directory.
  3. Verify that `frontend/` contains essential folders: `pages/`, `components/`, `styles/`.
  4. Ensure `.gitignore` includes `node_modules/` and `.next/`.
- **Expected Results:**
  - `frontend/` directory exists with the correct structure.
  - `.gitignore` correctly excludes specified directories.

#### **6.1.2. Project Initialization with Next.js**

- **Test Case ID:** FE-02
- **Title:** Verify Next.js Project Initialization
- **Preconditions:** Repository setup is complete.
- **Steps:**
  1. Clone the repository and navigate to `frontend/`.
  2. Run `npm install` to install dependencies.
  3. Start the development server using `npm run dev`.
- **Expected Results:**
  - Dependencies install without errors.
  - Development server starts successfully.
  - Application is accessible at `http://localhost:3000`.

#### **6.1.3. Tailwind CSS Integration**

- **Test Case ID:** FE-03
- **Title:** Verify Tailwind CSS Integration
- **Preconditions:** Next.js project is running locally.
- **Steps:**
  1. Open `pages/index.js`.
  2. Confirm the presence of Tailwind CSS classes (e.g., `className="flex items-center justify-center h-screen"`).
  3. Check `styles/globals.css` for Tailwind directives.
- **Expected Results:**
  - Tailwind CSS classes are applied correctly.
  - Styles render as expected on the welcome page.

#### **6.1.4. Basic Project Structure**

- **Test Case ID:** FE-04
- **Title:** Verify Basic Frontend Project Structure
- **Preconditions:** Repository and project initialization are complete.
- **Steps:**
  1. Inspect the `frontend/` directory.
  2. Ensure the presence of `components/`, `pages/`, `styles/`, and `tailwind.config.js`.
  3. Check for a sample component like `Navbar.js`.
- **Expected Results:**
  - All specified directories and files are present.
  - Sample components are correctly placed.

#### **6.1.5. CI/CD Configuration for Frontend**

- **Test Case ID:** FE-05
- **Title:** Verify Frontend CI/CD Pipeline
- **Preconditions:** GitHub Actions workflow is set up.
- **Steps:**
  1. Make a test commit to the `develop` branch.
  2. Push the commit and monitor GitHub Actions.
  3. Verify that the workflow `frontend-deploy.yml` triggers.
  4. Check logs for successful build and deployment steps.
- **Expected Results:**
  - CI/CD pipeline triggers on push.
  - All steps execute without errors.
  - Frontend is deployed to the specified server path.

#### **6.1.6. Basic Welcome Page**

- **Test Case ID:** FE-06
- **Title:** Verify Basic Welcome Page
- **Preconditions:** Frontend development server is running.
- **Steps:**
  1. Navigate to `http://localhost:3000`.
  2. Inspect the welcome message.
  3. Check for Tailwind CSS styling.
- **Expected Results:**
  - The page displays "Welcome to EduTrack!" in a styled format.
  - Layout aligns with Tailwind CSS classes.

### **6.2. Backend Testing**

#### **6.2.1. Repository Setup**

- **Test Case ID:** BE-01
- **Title:** Verify Backend Repository Setup
- **Preconditions:** Access to the GitHub repository.
- **Steps:**
  1. Navigate to the GitHub repository `EduTrack`.
  2. Check for the presence of `backend/` directory.
  3. Verify that `backend/` contains essential folders: `app/`, `requirements.txt`.
  4. Ensure `.gitignore` includes `__pycache__/`, `*.py[cod]`, and `*.env`.
- **Expected Results:**
  - `backend/` directory exists with the correct structure.
  - `.gitignore` correctly excludes specified directories and files.

#### **6.2.2. Project Initialization with FastAPI**

- **Test Case ID:** BE-02
- **Title:** Verify FastAPI Project Initialization
- **Preconditions:** Repository setup is complete.
- **Steps:**
  1. Clone the repository and navigate to `backend/`.
  2. Create and activate a virtual environment.
  3. Run `pip install -r requirements.txt` to install dependencies.
  4. Start the FastAPI server using `uvicorn app.main:app --reload`.
- **Expected Results:**
  - Dependencies install without errors.
  - FastAPI server starts successfully.
  - Application is accessible at `http://localhost:8000`.

#### **6.2.3. Database Configuration with PostgreSQL**

- **Test Case ID:** BE-03
- **Title:** Verify PostgreSQL Database Configuration
- **Preconditions:** FastAPI server is running locally.
- **Steps:**
  1. Inspect `app/database.py` for correct database URL.
  2. Ensure PostgreSQL is installed and a database named `edutrack` is created.
  3. Verify connection by running a simple query or using a database client.
- **Expected Results:**
  - Database URL is correctly formatted.
  - FastAPI connects to PostgreSQL without issues.
  - Database `edutrack` is accessible and responsive.

#### **6.2.4. Basic Project Structure**

- **Test Case ID:** BE-04
- **Title:** Verify Basic Backend Project Structure
- **Preconditions:** Repository and project initialization are complete.
- **Steps:**
  1. Inspect the `backend/app/` directory.
  2. Ensure the presence of `main.py`, `models.py`, `database.py`, and `routers/`.
  3. Check `models.py` for the `User` model definition.
- **Expected Results:**
  - All specified directories and files are present.
  - Models are correctly defined with SQLAlchemy.

#### **6.2.5. CI/CD Configuration for Backend**

- **Test Case ID:** BE-05
- **Title:** Verify Backend CI/CD Pipeline
- **Preconditions:** GitHub Actions workflow is set up.
- **Steps:**
  1. Make a test commit to the `sprint1` branch.
  2. Push the commit and monitor GitHub Actions.
  3. Verify that the workflow `backend-deploy.yml` triggers.
  4. Check logs for successful build and deployment steps.
- **Expected Results:**
  - CI/CD pipeline triggers on push.
  - All steps execute without errors.
  - Backend is deployed to the specified server path.

#### **6.2.6. Basic Welcome Endpoint**

- **Test Case ID:** BE-06
- **Title:** Verify Basic Welcome Endpoint
- **Preconditions:** Backend server is running.
- **Steps:**
  1. Navigate to `http://localhost:8000/`.
  2. Inspect the JSON response.
- **Expected Results:**
  - Response: `{"message": "Welcome to EduTrack!"}`
  - Endpoint responds with a 200 OK status.

### **6.3. Infrastructure Testing**

#### **6.3.1. GitHub Repository and Branching**

- **Test Case ID:** INF-01
- **Title:** Verify GitHub Repository Setup and Branching Strategy
- **Preconditions:** Access to the GitHub repository.
- **Steps:**
  1. Navigate to the `EduTrack` repository on GitHub.
  2. Check for branches: `main`, `develop`, `sprint1`.
  3. Attempt to push directly to `main` and verify branch protection.
  4. Confirm that merging to `main` and `develop` requires Pull Requests.
- **Expected Results:**
  - All specified branches exist.
  - Branch protection rules prevent direct pushes to `main`, `develop`, and `sprint1`.
  - Pull Requests are required for merging changes.

#### **6.3.2. Nginx Configuration**

- **Test Case ID:** INF-02
- **Title:** Verify Nginx Configuration for Proxying Requests
- **Preconditions:** Nginx is installed on the server.
- **Steps:**
  1. Inspect Nginx configuration files (e.g., `/etc/nginx/sites-available/edutrack`).
  2. Ensure that requests to `/frontend` are proxied to `http://localhost:3000`.
  3. Ensure that requests to `/backend` are proxied to `http://localhost:8000`.
  4. Restart Nginx and check for configuration errors.
- **Expected Results:**
  - Nginx correctly proxies frontend and backend requests.
  - No configuration errors upon restarting Nginx.
  - Accessing `http://your_domain.com` serves the frontend welcome page.

#### **6.3.3. Server Environment Setup**

- **Test Case ID:** INF-03
- **Title:** Verify Server Environment Setup for Backend and Frontend
- **Preconditions:** Server is accessible via SSH.
- **Steps:**
  1. SSH into the server.
  2. Check that Node.js and npm are installed (`node -v`, `npm -v`).
  3. Verify Python installation (`python3.9 --version`).
  4. Confirm that necessary directories (`/path/to/edutrack/frontend`, `/path/to/edutrack/backend`) exist.
  5. Check that Docker is installed if used.
- **Expected Results:**
  - Node.js, npm, and Python 3.9+ are installed.
  - Project directories are correctly structured.
  - Docker is available if utilized.

## **7. Test Environment**

- **Local Development Machines:**
  - OS: Ubuntu 20.04 or later
  - Browsers: Latest versions of Chrome, Firefox
  - Tools: Git, Node.js, npm, Python 3.9+, PostgreSQL

- **Server Environment:**
  - OS: Ubuntu 20.04 or later
  - Web Server: Nginx
  - Runtime: Node.js, Python 3.9+
  - Database: PostgreSQL
  - CI/CD: GitHub Actions

## **8. Roles and Responsibilities**

- **QA Engineer:**
  - Execute all test cases.
  - Report defects and inconsistencies.
  - Verify fixes and perform regression testing as needed.

- **Frontend Developer:**
  - Assist QA in understanding frontend setup.
  - Address any defects related to frontend configuration.

- **Backend Developer:**
  - Assist QA in understanding backend setup.
  - Address any defects related to backend configuration.

- **DevOps Engineer:**
  - Support QA in testing CI/CD pipelines.
  - Ensure server configurations meet specifications.

## **9. Pass/Fail Criteria**

- **Pass:**
  - All test cases are executed without critical defects.
  - CI/CD pipelines successfully build and deploy frontend and backend.
  - Server configurations correctly proxy requests.
  - Basic frontend and backend functionalities operate as expected.

- **Fail:**
  - Critical defects that prevent the application from running.
  - CI/CD pipelines fail to deploy applications.
  - Server configurations incorrectly proxy or fail to proxy requests.
  - Basic frontend or backend functionalities do not operate as expected.

## **10. Deliverables**

- **Test Plan Document:** This document outlining the testing strategy.
- **Test Cases and Results:** Detailed results of each executed test case.
- **Defect Reports:** Documentation of any defects found during testing.
- **Final Test Summary:** Overview of testing outcomes and readiness for deployment.

## **11. Schedule**

| **Activity**                     | **Responsible**  | **Start Date** | **End Date**   |
|----------------------------------|-------------------|-----------------|----------------|
| Test Planning                    | QA Engineer       | YYYY-MM-DD      | YYYY-MM-DD     |
| Test Case Development            | QA Engineer       | YYYY-MM-DD      | YYYY-MM-DD     |
| Test Execution                   | QA Engineer       | YYYY-MM-DD      | YYYY-MM-DD     |
| Defect Reporting and Verification| QA Engineer & Devs | YYYY-MM-DD      | YYYY-MM-DD     |
| Test Summary and Reporting       | QA Engineer       | YYYY-MM-DD      | YYYY-MM-DD     |

*Replace `YYYY-MM-DD` with actual dates based on project timelines.*

## **12. Risks and Mitigations**

- **Risk:** Incomplete or unclear setup documentation.
  - **Mitigation:** Collaborate closely with developers to clarify setup steps.

- **Risk:** CI/CD pipelines failing due to misconfigurations.
  - **Mitigation:** Involve DevOps engineers to ensure correct configurations.

- **Risk:** Server environment discrepancies.
  - **Mitigation:** Verify server configurations before testing.

## **13. Conclusion**

This test specification provides a structured approach for the QA Engineer to validate the successful completion of Sprint 1 for the EduTrack project. By meticulously executing the outlined test cases, the QA team will ensure that the foundational setup meets the project's requirements, enabling smooth progress in subsequent sprints.

---

**Note:**  
For any clarifications or assistance during testing, please reach out to the project leads or respective developers.