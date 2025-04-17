# tt4-final-exam_SIMULATION

✍️ Part I – Multiple Choice Questions (20 questions)

Each question is worth 0.5 points. Total: 10 points
🐳 Docker

  1. What is Docker?<br>
        A) A relational database<br>
        B) A web server<br>
        **C) A container platform for creating and managing environments**<br>
        D) A frontend framework<br>
        
  2. Which command builds a Docker image from a Dockerfile?<br>
        A) docker pull<br>
        **B) docker build** <br>
        C) docker start<br>
        D) docker run<br>

   3. What is docker-compose used for?<br>
        A) Compressing files<br>
        B) Creating multiple Docker images<br>
       **C) Orchestrating multiple containers** <br>
        D) Backing up volumes<br>

  4. What does the command docker ps do?<br>
        A) Create containers<br>
        B) List images<br>
        **C) Show running containers** <br>
        D) Stop all containers<br>
        
🌿 Git / GitHub<br>

  5. What does git clone do?<br>
        A) Create a new repository<br>
        **B) Download a copy of a remote repository**<br>
        C) Delete a local repo<br>
        D) Update a remote repo<br>

  6.  What is a “commit” in Git?<br>
        A) Send files to GitHub<br>
        B) Merge two branches<br>
        **C) Save changes locally in Git**<br>
        D) Delete modified files<br>

  7.  Which command pushes changes to GitHub?<br>
        **A) git push**<br>
        B) git pull<br>
        C) git add<br>
        D) git commit<br>

  8.  What is the purpose of a .gitignore file?<br>
        A) Ignore repositories<br>
       **B) Ignore files/folders from being committed**<br>
        C) Protect branches<br>
        D) Manage GitHub access<br>

⚙️ .NET Core<br>

  9.  Which command creates a new Web API project in .NET Core?<br>
        A) dotnet build api<br>
        **B) dotnet new webapi**<br>
        C) dotnet run api<br>
        D) dotnet create api<br>

  10.  Which file configures services and middleware in .NET Core?<br>
    **A) Startup.cs**<br>
    B) Program.cs<br>
    C) App.cs<br>
    D) Main.cs<br>

   11. Which package enables CORS in a .NET API?<br>
    A) Microsoft.AspNetCore.Routing<br>
    **B) Microsoft.AspNetCore.Cors**<br>
    C) Microsoft.AspNetCore.Mvc.NewtonsoftJson<br>
    D) System.Net.Http<br>

  12. What does the [HttpGet] attribute do in a Controller?<br>
    A) Send data<br>
    B) Update a resource<br>
    **C) Handle a GET request**<br>
    D) Delete data<br>

⚛️ Frontend Frameworks<br>

  13. In Angular, what is a component?<br>
    A) An external module<br>
    B) A backend service<br>
    **C) A part of the UI**<br>
    D) A build script<br>

  14. In React, what is useState?<br>
    A) A type of component<br>
    **B) A hook to manage state**<br>
    C) A hook for API requests<br>
    D) A type of props<br>

   15. What does VueJS use to loop through items?<br>
    A) *each<br>
    **B) v-for**<br>
    C) loop<br>
    D) ng-for<br>

  16. In Svelte, how do you declare a reactive variable?<br>
    A) @reactive<br>
    B) this.reactive<br>
    **C) $:**<br>
    D) var:<br>

💡 General Concepts<br>

  17. What is CRUD?<br>
    A) A type of database<br>
    B) A security pattern<br>
    **C) Create, Read, Update, Delete**<br>
    D) A REST API format<br>

  18. How do you install dependencies in Angular?<br>
    A) ng add<br>
    B) ng install<br>
    **C) npm install**<br>
    D) ng dependencies<br>

  19. What is the purpose of package.json?<br>
    A) Save logs<br>
    B) Configure production builds<br>
    **C) Manage project dependencies**<br>
    D) Create containers<br>

  20. How do you start services using Docker Compose?<br>
    A) docker-compose run<br>
    B) docker-compose build<br>
    C) docker-compose start<br>
   **D) docker-compose up**<br>


### 💻 **Part II – Final Project (10 points)**

#### 🔧 Project: **Task Manager (CRUD Application)**

---

### ✅ Requirements

#### 📦 Backend (ASP.NET Core API):
- Create a `.NET Core WebAPI` project
- Build CRUD operations for "Task" entity:
  - ID
  - Title
  - Description
  - Completed (boolean)
- Use Entity Framework with PostgreSQL || MySQL || MSSQL || SQLite
- Enable CORS
- Push code to a public GitHub repository

#### 🌐 Frontend App:
Use a frontend framework based on the **last digit of the student ID**:
| Last Digit | Framework |
|------------|-----------|
| 0, 2, 4    | Angular   |
| 1, 3, 5    | React     |
| 6, 9       | VueJS     |
| 7, 8       | Svelte    |

Must implement:
- Fetching tasks from the API
- Listing, creating, updating, deleting tasks
- Simple UI (Bootstrap, Tailwind or Material allowed)

#### 🐳 Docker Setup:
- Create `Dockerfile` for **backend** and **frontend**
- Create `docker-compose.yml` to simulate production
- Must run using `docker-compose up`

---

### 📁 Expected GitHub Repo Structure
#### Github repository name: `tt4-final-exam-simulation` 
```
/
├── backend/
│   ├── Dockerfile
│   └── ...
├── frontend/
│   └── ...
├── default.conf
├── Dockerfile
├── docker-compose.yml
├── README.md
```

---

## 📄 **Extra Requirement – Project README**

The `README.md` file in the GitHub repository **must contain this final exam** (both parts I and II).

- Students must **highlight their selected answers** in the multiple-choice questions by surrounding the chosen option with `**` (markdown bold).
  
  ### Example:
  ```markdown
  1. What is Docker?  
     - A) A relational database  
     - **B) A container platform for creating and managing environments**  
     - C) A web server  
     - D) A frontend framework  
  ```
- scroll up, click in the button `Raw`, ctrl + A, ctrl + C (copy the content) and PASTE in your `README.md` file
---

### 📊 **Grading Criteria**

| Section                                  | Points | Notes                                                              |
|------------------------------------------|--------|--------------------------------------------------------------------|
| **Structure + MCQ submission**           | 4.0    | Just having the full structure + answered questions (right or wrong) |
| **Backend implementation**               | 2.0    | CRUD API, DB, CORS, EF, correct endpoints                         |
| **Frontend implementation**              | 2.0    | CRUD with correct framework, working with API                     |
| **Docker & Compose setup**              | 1.5    | Functional Dockerfiles, working Compose setup                     |
| **GitHub + README**                      | 0.5    | Proper structure, includes this full exam in README               |
| **TOTAL**                                | 10.0   |                                                                    |


  ---
  
  ### Final Projects (For consulting)
  
  - [Product Managemnet System](https://github.com/allanbarcelos/product-management-system)
  - [Task Management System](https://github.com/allanbarcelos/task-management-system)
  - [Project Management System](https://github.com/allanbarcelos/project-management-system)
  - [Student Management System](https://github.com/allanbarcelos/student-management-system)
  
  ---

# 🚨 Submit only the link to your GitHub repository (create a TXT file - with Notepad)
# ❌ Not following the repository structure = Automatic elimination  
# ✅ This document must be included and completed in `README.md`  
