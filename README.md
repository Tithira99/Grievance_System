# Grievance Handling System

## Project Information
Development Period: September 2021 – December 2021  
Course: 2nd Year Group Project
Type: Team Project of 2 members at Lanka Nippon Biztech Institute 

## Overview
The **Grievance Handling System** is a web-based application designed to improve the efficiency and transparency of employee complaint management within large organizations. The system allows Human Resources (HR) departments to receive, track, review, and resolve employee grievances through a structured workflow.

The application was designed for organizations with large employee bases (1500+ employees) where handling complaints manually becomes inefficient and difficult to track.

The system implements a multi-level approval process inspired by the Japanese “Ringi” decision-making system, where grievances are reviewed and approved through hierarchical organizational levels before reaching final resolution.

---

## Key Features
- Submit and track employee grievances
- Multi-level approval workflow for complaint resolution
- Transparent status tracking of grievance requests
- HR management dashboard
- Structured workflow for reviewing and approving grievances
- Secure backend APIs for data processing

---
## System Architecture

The system follows a **modern web application architecture** with a separate frontend and backend.

Frontend (Angular)
       |
REST API
       |
Backend (Spring Boot)
       |
Database (MySQL)

The backend provides RESTful APIs that manage complaint data, workflow status, and approval processes.

## My Contribution
- Led the project as the project leader in a two-person development team.

- Designed the overall system architecture, including:

  - UML diagrams
  
  - ER diagrams
  
  - Class diagrams

- Implemented backend APIs using Spring Boot (Java).

- Designed and implemented the MySQL database schema.

- Developed CRUD operations for complaint management.

- Integrated backend APIs with the Angular frontend.

- Developed over 90% of the core system functionality.

- Proposed and implemented a transition to an API-based architecture to improve system scalability and maintainability.

- Self-learned Spring Boot and Angular through official documentation and applied them during development.

---

## Technologies Used

### Backend
- Spring Boot (Java)

### Frontend
- Angular
- TypeScript

### Database
- MySQL

### Development Tools
- IntelliJ IDEA
- Visual Studio Code
- Git / GitHub
  
---
## Requirements

- Java 17 or later
- Node.js and npm
- Angular CLI
- MySQL Server
- Git
  
---
## Installation

### Clone the Repository

git clone https://github.com/Tithira99/Grievance_Handling_System.git
cd Grievance_Handling_System

---

## Database Setup

1. Install MySQL and create a database.

CREATE DATABASE grievance_system;

2. Update database credentials in the backend configuration file:

backend/src/main/resources/application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/grievance_system
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

---

## Running the Backend (Spring Boot)

Navigate to the backend folder:
cd backend

Run the application:
./mvnw spring-boot:run

## Running the Frontend (Angular)

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the Angular development server:

ng serve

---

## Screenshots
<img width="1005" height="560" alt="image" src="https://github.com/user-attachments/assets/63178023-f7ce-47dc-8e26-9fd6752c1353" />
<img width="1080" height="474" alt="image" src="https://github.com/user-attachments/assets/0e4ede74-b007-47f5-a121-f93eab236ce3" />
<img width="1080" height="506" alt="image" src="https://github.com/user-attachments/assets/7a742d7d-bfb6-45bc-b137-871cb3c83a5d" />
<img width="1080" height="578" alt="image" src="https://github.com/user-attachments/assets/bc2b095c-1f1e-4d36-8548-c55ea3529e86" />
<img width="1080" height="537" alt="image" src="https://github.com/user-attachments/assets/44a73082-0b13-49b8-8847-a7127ec9ccb9" />
<img width="1080" height="578" alt="image" src="https://github.com/user-attachments/assets/3736f268-b366-4e2f-8532-aa4e01b27bd9" />
<img width="1080" height="531" alt="image" src="https://github.com/user-attachments/assets/6e8d77e5-255c-4a96-be01-e833c71ad661" />



---

## API Examples
```
GET /adminTable
GET /employees
POST /employees
PUT /employees/{id}
   |
   |
   |
   |
etc------------
```
---

## Example Workflow

1. Employee submits a grievance.
2. HR reviews the complaint.
3. The request moves through multiple approval levels.
4. Final decision is recorded in the system.

---

## Key Concepts Applied
- Web application architecture
- RESTful API design
- Database schema design
- CRUD operations
- Workflow management systems
- Full-stack development

---
## Project Structure

```
Grievance_Handling_System
│
├── backend
│   ├── controllers
│   ├── services
│   ├── models(Entities)
│   └── repositories
│
├── frontend
│   ├── components
│   ├── services
│   └── UI modules
│
├── database
│   └── schema.sql(Database)
│
└── README.md
```

## Learning Outcomes

Through this project I gained experience in:

- Full-stack web application development
- Designing scalable backend architectures
- Building REST APIs using Spring Boot
- Integrating frontend and backend systems
- Managing collaborative development workflows
