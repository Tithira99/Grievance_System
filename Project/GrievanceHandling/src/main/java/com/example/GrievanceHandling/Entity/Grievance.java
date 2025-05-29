package com.example.GrievanceHandling.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@Entity

public class Grievance {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE,generator="ISequence")
    @GenericGenerator(name="ISequence", strategy="com.example.GrievanceHandling.Entity.IDGenerator",
            parameters = {

                    @org.hibernate.annotations.Parameter(name=IDGenerator.PREFIX_PARAMETER, value="GRV_"),
                    @org.hibernate.annotations.Parameter(name=IDGenerator.NUMBER_FORMAT_PARAMETER, value="%05d")
            })
    private String grievanceID;
    @JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
    private Date grievanceDate=getCurrentDate();
    @NotBlank(message="Grievance Description is Required")
    private String grievanceDescription;
    private String lineManagerAction="Not Received";
    private String agmResponse="Not Received";
    private String gmResponse="Not Received";
    private String grievanceStatus="Grievance Placed";
    private String grievanceSolution="Pending";
   //@NotBlank(message="Employee ID is Required")
    private String employeeID;






    public static Date getCurrentDate() {
        Date date = new Date();
        return date;

    }



    public Grievance() {
    }

    @Override
    public String toString() {
        return "Grievance{" +
                "grievanceID='" + grievanceID + '\'' +
                ", grievanceDate=" + grievanceDate +
                ", grievanceDescription='" + grievanceDescription + '\'' +
                ", lineManagerAction='" + lineManagerAction + '\'' +
                ", agmResponse='" + agmResponse + '\'' +
                ", gmResponse='" + gmResponse + '\'' +
                ", grievanceStatus='" + grievanceStatus + '\'' +
                ", grievanceSolution='" + grievanceSolution + '\'' +
                ", employeeID='" + employeeID + '\'' +
                '}';
    }

    public Grievance(String grievanceID) {
        this.grievanceID = grievanceID;
    }
    public Grievance(String grievanceID, String lineManagerAction, String agmResponse, String gmResponse, String grievanceStatus, String grievanceSolution) {

        this.grievanceID = grievanceID;
        this.lineManagerAction = lineManagerAction;
        this.agmResponse = agmResponse;
        this.gmResponse = gmResponse;
        this.grievanceStatus = grievanceStatus;
        this.grievanceSolution = grievanceSolution;

    }


    public Grievance(String grievanceID, Date grievanceDate, String grievanceDescription, String lineManagerAction, String agmResponse, String gmResponse, String grievanceStatus, String grievanceSolution, String employeeID) {
        this.grievanceID = grievanceID;
        this.grievanceDate = grievanceDate;
        this.grievanceDescription = grievanceDescription;
        this.lineManagerAction = lineManagerAction;
        this.agmResponse = agmResponse;
        this.gmResponse = gmResponse;
        this.grievanceStatus = grievanceStatus;
        this.grievanceSolution = grievanceSolution;
        this.employeeID = employeeID;
    }



    public Grievance(String grievanceID, Date grievanceDate, String grievanceDescription, String agmResponse, String gmResponse, String grievanceStatus, String grievanceSolution ) {
        this.grievanceID = grievanceID;
        this.grievanceDate = grievanceDate;
        this.grievanceDescription = grievanceDescription;
        this.agmResponse = agmResponse;
        this.gmResponse = gmResponse;
        this.grievanceStatus = grievanceStatus;
        this.grievanceSolution = grievanceSolution;

    }

    public String getGrievanceID() {
        return grievanceID;
    }

    public void setGrievanceID(String grievanceID) {
        this.grievanceID = grievanceID;
    }

    public Date getGrievanceDate() {
        return grievanceDate;
    }

    public void setGrievanceDate(Date grievanceDate) {
        this.grievanceDate = grievanceDate;
    }

    public String getGrievanceDescription() {
        return grievanceDescription;
    }

    public void setGrievanceDescription(String grievanceDescription) {
        this.grievanceDescription = grievanceDescription;
    }

    public String getLineManagerAction() {
        return lineManagerAction;
    }

    public void setLineManagerAction(String lineManagerAction) {
        this.lineManagerAction = lineManagerAction;
    }

    public String getAgmResponse() {
        return agmResponse;
    }

    public void setAgmResponse(String agmResponse) {
        this.agmResponse = agmResponse;
    }

    public String getGmResponse() {
        return gmResponse;
    }

    public void setGmResponse(String gmResponse) {
        this.gmResponse = gmResponse;
    }

    public String getGrievanceStatus() {
        return grievanceStatus;
    }

    public void setGrievanceStatus(String grievanceStatus) {
        this.grievanceStatus = grievanceStatus;
    }

    public String getGrievanceSolution() {
        return grievanceSolution;
    }

    public void setGrievanceSolution(String grievanceSolution) {
        this.grievanceSolution = grievanceSolution;
    }

    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }
}
