## **Sprint 1: Project and Infrastructure Setup**

### **Application Name**

**EduTrack** – An application for tracking student performance, lecture attendance, and chat activity with gamification elements.

---

### **Overview**

**Sprint 1** focuses on setting up the foundational aspects of the EduTrack project, including repository configuration, server infrastructure setup, and initial project structure for both backend and frontend. This sprint ensures that both backend and frontend environments are properly configured and integrated, providing a stable base for subsequent development phases.

---

## **Backend Setup Document**

### **Sprint 1: Backend Setup**

#### **Sprint Goals:**

1. **Set up the code repository on GitHub.**
2. **Set up the server infrastructure using FastAPI for the backend.**
3. **Prepare the basic project structure.**
4. **Set up CI/CD processes for the backend.**

#### **Roles and Responsibilities:**

- **Back-end Developer:**
  - Configure FastAPI.
  - Create the basic backend structure.
  - Set up CI/CD for backend deployment.

#### **Technical Requirements and Tools:**

- **Backend:**
  - FastAPI
  - Python 3.9+
  - Uvicorn
  - SQLAlchemy (for ORM)
  - PostgreSQL (proposed database)

- **Infrastructure:**
  - GitHub
  - Nginx
  - Docker (optional)
  - GitHub Actions (for CI/CD)

#### **Tasks and Steps:**

### **1. Setting Up the Repository on GitHub**

**Tasks:**

- **Create a new repository on GitHub named `EduTrack`.**
- **Set up branching (e.g., `main` for production, `develop` for development, `feature/*` for features).**
- **Add a `.gitignore` file to exclude unnecessary files (e.g., `node_modules`, `__pycache__`).**
- **Create basic documentation in `README.md`.**

**Steps:**

1. **Creating the Repository:**
   - Navigate to [GitHub](https://github.com/) and create a new repository named `EduTrack`.
   - Choose either public or private access based on your needs.

2. **Setting Up Branches:**
   - Create the main branch `main`.
   - Create the `develop` branch for development.
   - Set up branch protection rules (e.g., prevent direct pushes to `main`).

3. **Adding `.gitignore`:**
   - **For Python:**
     ```gitignore
     # EduTrack/.gitignore
     # Python
     __pycache__/
     *.py[cod]
     *.env
     ```
   - **For Node.js:**
     ```gitignore
     # EduTrack/.gitignore
     # Node
     node_modules/
     .next/
     ```
   - **Combine both into a single `.gitignore` file.**

4. **Creating `README.md`:**
   ```markdown
   <!-- EduTrack/README.md -->
   # EduTrack

   EduTrack is an application for tracking student performance, lecture attendance, and chat activity with gamification elements.

   ## Getting Started

   Instructions for setting up the project for development and deployment.

   ## Technologies

   - **Backend:** FastAPI, Python
   - **Frontend:** Next.js, React, Tailwind CSS
   - **Database:** PostgreSQL
   ```

### **Creating the `sprint1` Branch**

**Tasks:**

- **Create a new branch named `sprint1` for the initial sprint work.**
- **Ensure that the `sprint1` branch is protected and follows the same rules as `main` and `develop`.**

**Steps:**

1. **Creating the `sprint1` Branch:**
    - Navigate to your local repository and create the branch:
      ```bash
      git checkout -b sprint1
      ```

2. **Pushing the `sprint1` Branch to GitHub:**
    - Push the new branch to the remote repository:
      ```bash
      git push origin sprint1
      ```

3. **Setting Up Branch Protection Rules:**
    - Navigate to your GitHub repository.
    - Go to `Settings` > `Branches` > `Branch protection rules`.
    - Add a new rule for `sprint1` to prevent direct pushes and require pull requests for merging.


### **Updating the CI/CD Workflow for `sprint1` Branch**

**Steps:**

1. **Modify the Workflow File:**
    - Update `.github/workflows/backend-deploy.yml` to include the `sprint1` branch:
      ```yaml
      on:
         push:
            branches:
              - main
              - develop
              - sprint1
      ```

2. **Commit and Push Changes:**
    - Commit the changes to the workflow file and push to the `sprint1` branch:
      ```bash
      git add .github/workflows/backend-deploy.yml
      git commit -m "Update CI/CD workflow to include sprint1 branch"
      git push origin sprint1
      ```

---

### **2. Setting Up the Server Infrastructure**

**Current Conditions:**

- **The server is already set up with Nginx.**

**Tasks:**

- **Set up the environment for the backend (FastAPI).**
- **Set up virtual environments and dependencies.**
- **Configure Nginx to proxy requests to the backend.**

**Steps:**

#### **2.1. Setting Up the Backend (FastAPI)**

1. **Install Python and Virtual Environment:**
   ```bash
   sudo apt update
   sudo apt install python3.9 python3.9-venv python3.9-dev
   ```

2. **Create and Activate the Virtual Environment:**
   ```bash
   python3.9 -m venv venv
   source venv/bin/activate
   ```

3. **Install Dependencies:**
   ```bash
   pip install fastapi uvicorn sqlalchemy psycopg2-binary
   ```

4. **Create the Project Structure:**
   ```
   EduTrack/
   ├── backend/
   │   ├── app/
   │   │   ├── __init__.py
   │   │   ├── main.py
   │   │   ├── models.py
   │   │   ├── database.py
   │   │   └── routers/
   │   │       └── __init__.py
   │   ├── requirements.txt
   │   └── alembic/ (optional for migrations)
   ```

5. **Create `main.py`:**
   ```python
   # EduTrack/backend/app/main.py
   from fastapi import FastAPI

   app = FastAPI()

   @app.get("/")
   def read_root():
       return {"message": "Welcome to EduTrack!"}
   ```

6. **Create `requirements.txt`:**
   ```plaintext
   # EduTrack/backend/requirements.txt
   fastapi
   uvicorn
   sqlalchemy
   psycopg2-binary
   ```

7. **Test Locally:**
   ```bash
   uvicorn app.main:app --reload
   ```
   - Navigate to `http://localhost:8000` to verify the welcome message.

---

### **3. Setting Up CI/CD with GitHub Actions**

**Goals:**

- **Automate the deployment process on pushes to `main`, `develop`, or `sprint1`.**
- **Ensure continuous integration and delivery.**

**Steps:**

#### **3.1. Creating GitHub Actions for the Backend**

1. **Create a Workflows Folder:**
   - In the root of the repository, create a folder named `.github/workflows/`.

2. **Create a Workflow File:**
   - Create a file named `backend-deploy.yml`:
     ```yaml
     # EduTrack/.github/workflows/backend-deploy.yml
     name: Backend CI/CD

     on:
       push:
         branches:
           - main
           - develop
           - sprint1

     jobs:
       build:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout code
             uses: actions/checkout@v2

           - name: Set up Python
             uses: actions/setup-python@v2
             with:
               python-version: '3.9'

           - name: Install dependencies
             run: |
               python -m venv venv
               source venv/bin/activate
               pip install -r backend/requirements.txt

           - name: Run Tests
             run: |
               source venv/bin/activate
               # Add commands to run tests
               echo "Tests not set up"

           - name: Deploy to Server
             uses: easingthemes/ssh-deploy@v2.1.5
             with:
               ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
               remote-user: your_server_user
               server-ip: your_server_ip
               remote-path: /path/to/edutrack/backend
               local-path: backend/
     ```

#### **3.2. Setting Up Secrets:**

- In your GitHub repository, navigate to `Settings` > `Secrets and variables` > `Actions`.
- Add a secret named `SSH_PRIVATE_KEY` containing your private SSH key for server access.

### **4. Creating the Basic Project Structure**

#### **4.1. Backend (FastAPI)**

1. **Create `database.py`:**
   ```python
   from sqlalchemy import create_engine
   from sqlalchemy.ext.declarative import declarative_base
   from sqlalchemy.orm import sessionmaker

   SQLALCHEMY_DATABASE_URL = "postgresql://user:password@localhost/edutrack"

   engine = create_engine(SQLALCHEMY_DATABASE_URL)
   SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
   Base = declarative_base()
   ```

2. **Create `models.py`:**
   ```python
   from sqlalchemy import Column, Integer, String
   from .database import Base

   class User(Base):
       __tablename__ = "users"

       id = Column(Integer, primary_key=True, index=True)
       username = Column(String, unique=True, index=True)
       email = Column(String, unique=True, index=True)
       hashed_password = Column(String)
   ```

3. **Update `main.py` to Connect to the Database:**
   ```python
   from fastapi import FastAPI, Depends
   from sqlalchemy.orm import Session
   from .database import SessionLocal, engine
   from .models import Base

   Base.metadata.create_all(bind=engine)

   app = FastAPI()

   def get_db():
       db = SessionLocal()
       try:
           yield db
       finally:
           db.close()

   @app.get("/")
   def read_root():
       return {"message": "Welcome to EduTrack!"}
     ```

---

### **Conclusion**

- **GitHub Repository:** The repository for EduTrack is correctly set up with the proper branching (`sprint1`).
- **Backend:** The FastAPI backend is configured to run on `http://localhost:8000` and is integrated into the CI/CD workflow.
