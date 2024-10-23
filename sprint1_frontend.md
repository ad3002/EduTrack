## **Frontend Setup Document**

### **Sprint 1: Frontend Setup**

#### **Sprint Goals:**

1. **Set up the code repository on GitHub.**
2. **Initialize the frontend project using Next.js and integrate Tailwind CSS.**
3. **Establish the basic project structure.**
4. **Configure CI/CD processes for frontend deployment.**

---

### **Frontend Setup Document**

#### **Sprint 1: Frontend Setup**

##### **Sprint Goals:**

1. **Set up the code repository on GitHub.**
2. **Initialize the frontend project using Next.js and integrate Tailwind CSS.**
3. **Establish the basic project structure.**
4. **Configure CI/CD processes for frontend deployment.**

##### **Roles and Responsibilities:**

- **Front-end Developer:**
  - Initialize Next.js project.
  - Integrate Tailwind CSS.
  - Develop the basic frontend structure.
  - Set up CI/CD for frontend deployment.

##### **Technical Requirements and Tools:**

- **Frontend:**
  - Next.js
  - React
  - Tailwind CSS
  - JavaScript (ES6+)

- **Infrastructure:**
  - GitHub
  - Nginx
  - Docker (optional)
  - GitHub Actions (for CI/CD)

- **Communication and Project Management Tools:**
  - Slack
  - Jira/Trello
  - GitHub Projects

##### **Tasks and Steps:**

### **1. Setting Up the Repository on GitHub**

*Note: Repository setup is handled in the Backend Setup Document to avoid duplication. Ensure both frontend and backend are in the same repository under separate directories (`frontend/` and `backend/`).*

### **2. Initializing the Frontend Project**

**Tasks:**

- **Initialize the Next.js project.**
- **Install and configure Tailwind CSS.**
- **Create the basic project structure with necessary folders (`pages`, `components`, `styles`).**
- **Develop a basic welcome page.**
- **Configure CI/CD for frontend deployment.**

**Steps:**

#### **2.1. Setting Up the Frontend (Next.js with Tailwind CSS)**

1. **Install Node.js and npm:**
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. **Create the Next.js Project:**
   ```bash
   npx create-next-app@latest frontend
   cd frontend
   ```

3. **Install Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure `tailwind.config.js`:**
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. **Add Tailwind to CSS:**
   In `styles/globals.css`, add:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Create a Basic Page:**
   In `pages/index.js`:
   ```javascript
   export default function Home() {
     return (
       <div className="flex items-center justify-center h-screen">
         <h1 className="text-4xl">Welcome to EduTrack!</h1>
       </div>
     )
   }
   ```

7. **Test Locally:**
   ```bash
   npm run dev
   ```
   - Navigate to `http://localhost:3000` to verify the welcome message.

### **3. Configuring CI/CD with GitHub Actions**

**Goals:**

- **Automate the deployment process on pushes to `main` or `develop`.**
- **Ensure continuous integration and delivery for the frontend.**

**Steps:**

#### **3.1. Creating GitHub Actions for the Frontend**

1. **Create a Workflow File:**
   - In the `.github/workflows` directory, create a file named `frontend-deploy.yml`:
     ```yaml
     name: Frontend CI/CD

     on:
       push:
         branches:
           - main
           - develop

     jobs:
       build:

         runs-on: ubuntu-latest

         steps:
         - name: Checkout code
           uses: actions/checkout@v2

         - name: Set up Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '16'

         - name: Install dependencies
           run: |
             cd frontend
             npm install

         - name: Build
           run: |
             cd frontend
             npm run build

         - name: Deploy to Server
           uses: easingthemes/ssh-deploy@v2.1.5
           with:
             ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
             remote-user: your_server_user
             server-ip: your_server_ip
             remote-path: /path/to/edutrack/frontend
             local-path: frontend/
     ```

#### **3.2. Setting Up Secrets:**

*Note: Ensure that the `SSH_PRIVATE_KEY` secret is already set up in the GitHub repository as described in the Backend Setup.*

### **4. Establishing the Basic Project Structure**

#### **4.1. Frontend (Next.js with Tailwind CSS)**

1. **Create the Basic Components Structure:**
   - Create folders: `components`, `pages`, `styles`, and other necessary directories.
   - Example structure:
     ```
     frontend/
     ├── components/
     │   └── Navbar.js
     ├── pages/
     │   ├── index.js
     │   └── _app.js
     ├── styles/
     │   └── globals.css
     └── tailwind.config.js
     ```

2. **Configure Tailwind CSS:**
   - Ensure Tailwind CSS is properly set up and working on the pages by verifying styles on the basic welcome page.

### **5. Documentation and Best Practices**

**Recommendations:**

- **Coding:**
  - Follow clean code principles.
  - Write clear and informative comments.

- **Version Control:**
  - Commits should be atomic and contain informative messages.
  - Use Pull Requests for code reviews before merging into `develop` or `main`.

- **Security:**
  - Store secrets and confidential data in environment variables.
  - Never commit passwords or keys to the repository.

### **6. Testing and Validation**

**Goals:**

- **Ensure that the basic frontend infrastructure is functioning correctly.**
- **Verify that the frontend can interact with the backend through the configured server.**

**Steps:**

1. **Frontend:**
   - Run Next.js locally and verify that the basic page is displayed with Tailwind CSS.
   - Check that API requests (e.g., `http://localhost/api/`) work through Nginx.

2. **CI/CD:**
   - Perform a test push to the `develop` branch and ensure that GitHub Actions execute correctly.
   - Verify deployment on the server.

---

### **Sprint Conclusion**

**By the End of Sprint 1:**

- **GitHub Repository** is set up with a basic structure and branch protection.
- **Frontend (Next.js)** is configured with Tailwind CSS and a basic page.
- **CI/CD Processes** are configured for automatic deployment on pushes to `main` and `develop`.
- **Server** is configured to proxy requests to the frontend through Nginx.
- **Documentation** is updated with basic project information.

**User Capabilities:**

- **Users can** view the basic welcome page at `http://your_domain.com`.

---

## **Recommendations for the Team**

1. **Regular Meetings:**
   - Conduct daily stand-ups to discuss progress and identify obstacles.

2. **Communication:**
   - Use Slack or another messenger for quick communication.
   - Update task statuses in Jira or Trello.

3. **Quality Control:**
   - Perform code reviews through Pull Requests.
   - Maintain code quality using linters and formatters (e.g., ESLint for frontend, Pylint for backend).

4. **Documentation:**
   - Maintain detailed documentation for environment setup, deployment, and application usage.
   - Update `README.md` with each new sprint.

5. **Flexibility:**
   - Be prepared to adapt the sprint plan based on feedback and current project needs.

---

## **Conclusion**

**Sprint 1** establishes the foundational elements for the successful development of the **EduTrack** application. Properly configured infrastructure, repository, and basic functionality provide a stable base for subsequent sprints. By following these specifications for both the backend and frontend, the team can effectively collaborate and progressively enhance the application's capabilities.

If you need further detailing on specific sprints or assistance with other aspects of the project, please let me know!

---