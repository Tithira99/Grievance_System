# Grievance Handling System

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
│   ├── models
│   └── repositories
│
├── frontend
│   ├── components
│   ├── services
│   └── UI modules
│
├── database
│   └── schema.sql
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
