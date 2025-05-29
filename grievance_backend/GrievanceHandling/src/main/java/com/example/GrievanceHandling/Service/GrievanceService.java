package com.example.GrievanceHandling.Service;

import com.example.GrievanceHandling.Entity.Grievance;
import com.example.GrievanceHandling.error.GrievanceNotFoundException;

import java.util.List;


public interface GrievanceService {

    public Grievance saveGrievance(Grievance grievance);

    public List<Grievance> fetchGrievanceList();

    public Grievance fetchGrievanceById(String grievanceID) throws GrievanceNotFoundException;

    public void deleteGrievanceById(String grievanceId);

    public Grievance updateGrievance(String grievanceId, Grievance grievance);

    public List<Grievance> fetchGrievanceByEmployeeID(String employeeId);

    public List<Object> fetchAdminData();


    public List<Object> fetchAgmDetails();

    public List<Object> fetchgmDetails();
}
