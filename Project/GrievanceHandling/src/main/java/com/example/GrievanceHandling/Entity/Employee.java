package com.example.GrievanceHandling.Entity;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;
import org.springframework.validation.annotation.Validated;


import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE,generator="ESequence")
    @GenericGenerator(name="ESequence", strategy="com.example.GrievanceHandling.Entity.IDGenerator",
            parameters = {

                    @Parameter(name=IDGenerator.PREFIX_PARAMETER, value="EMP_"),
                    @Parameter(name=IDGenerator.NUMBER_FORMAT_PARAMETER, value="%05d")
            })
    private String employeeID;
    @NotBlank( message = "Name Required")
    private String employeeName;
    @NotBlank(message = "Division is Required")
    private String division;
    @NotBlank(message = "Department is Required")
    private String department;
    @NotBlank(message = "Post is Required")
    private String post;//Post in the company
    @NotBlank(message = "Role is Required")
    private String role;//Role in the system
    @NotBlank(message = "Email is Required")
    @Email(message = "Invalid Email")
    private String email;
    @NotBlank(message = "Name of Imediate Boss is Required")
    private String lineManager;
    @NotBlank(message = "Mobile Number is Required")
    private String mobileNumber;
    @Column(unique=true)
    @NotBlank(message = "User Name is Required")
    private String userName;
    @NotBlank(message = "Password is Required")
    private String password;


    public Employee() {
    }

    public Employee(String employeeID) {
        this.employeeID = employeeID;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeID='" + employeeID + '\'' +
                ", employeeName='" + employeeName + '\'' +
                ", division='" + division + '\'' +
                ", department='" + department + '\'' +
                ", post='" + post + '\'' +
                ", role='" + role + '\'' +
                ", email='" + email + '\'' +
                ", lineManager='" + lineManager + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public Employee(String employeeID, String employeeName, String division, String department, String post, String role, String email, String lineManager, String mobileNumber, String userName, String password) {
        this.employeeID = employeeID;
        this.employeeName = employeeName;
        this.division = division;
        this.department = department;
        this.post = post;
        this.role = role;
        this.email = email;
        this.lineManager = lineManager;
        this.mobileNumber = mobileNumber;
        this.userName = userName;
        this.password = password;
    }

    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLineManager() {
        return lineManager;
    }

    public void setLineManager(String lineManager) {
        this.lineManager = lineManager;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}



