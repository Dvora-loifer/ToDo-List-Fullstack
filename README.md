Project Overview – Task Management App (Fullstack)

A fullstack task management application that includes backend, frontend, and database layers.
Built using .NET Minimal API, MySQL, and React. Developed in VSCode using the Dotnet CLI.

Backend – Minimal API

Created as a Minimal API project for concise and straightforward API development.

All logic resides in the Program.cs file with no Controllers folder.

Project initialized with:

dotnet new web -o TodoApi

Database Integration – DB First & Entity Framework

Connected to a local MySQL database via MySQL Workbench.

Created a table named Items with the following columns: Id, Name, IsComplete.

Used EF Core with DB First approach:

dotnet ef dbcontext scaffold Name=ToDoDB Pomelo.EntityFrameworkCore.MySql -f -c ToDoDbContext
Routing & Endpoints
Mapped CRUD operations directly in Program.cs:

    Get all tasks
    
    Add a new task
    
    Update a task
    
    Delete a task

Used Dependency Injection to inject DbContext.

Additional Server Configurations

CORS: Configured to allow requests from the frontend.

Swagger: Used for API documentation and testing.

Debugging: Done in VSCode using breakpoints.

Frontend – React

Cloned from GitHub:

ToDoListReact

Installed dependencies and started the app with:

npm i
npm start

Completed API calls in service.js.

Used Axios for HTTP requests:

Set base URL

Configured an interceptor to handle errors

Deployment – Cloud Hosting

Render:

Deployed the React app as a Static Site.

Deployed the API as a Web Service using a Dockerfile.

CleverCloud:

Created a MySQL database in the cloud.

Updated the connection string in the environment variables of the Render backend service.

Environment Variables:

React frontend uses a .env file with environment variables.

API URL is set dynamically via environment variable (not hardcoded).

