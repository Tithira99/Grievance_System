package com.example.GrievanceHandling.Controller;


import com.example.GrievanceHandling.Entity.Grievance;
import com.example.GrievanceHandling.Service.GrievanceService;
import com.example.GrievanceHandling.error.GrievanceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class GrievanceController {
    @Autowired
    private GrievanceService grievanceService;

    @PostMapping("/grievances")
    public Grievance saveGrievance(@Valid @RequestBody Grievance grievance){
        return grievanceService.saveGrievance(grievance);
    }

    @GetMapping("/grievances")
    public List<Grievance> fetchGrievanceList(){
        return grievanceService.fetchGrievanceList();
    }

    @GetMapping("/grievances/{id}")
    public Grievance fetchGrievanceById(@PathVariable("id") String grievanceID) throws GrievanceNotFoundException {
        return grievanceService.fetchGrievanceById(grievanceID);
    }

    @DeleteMapping("/grievances/{id}")
    public String deleteGrievanceById(@PathVariable("id") String GrievanceId){
        grievanceService.deleteGrievanceById(GrievanceId);
        return "Grievance Deleted Successfully!";
    }

    @PutMapping("/grievances/{id}")
    public Grievance updateGrievance(@PathVariable("id") String grievanceId, @RequestBody Grievance grievance) throws GrievanceNotFoundException {
        grievanceService.fetchGrievanceById(grievanceId);
        return grievanceService.updateGrievance(grievanceId, grievance);
    }

    @GetMapping("/grievances/employeeid/{eid}")
    public List<Grievance> fetchGrievanceByEmployeeID(@PathVariable("eid") String employeeId){
        return grievanceService.fetchGrievanceByEmployeeID(employeeId);
    }

    @GetMapping("/adminTable")
    public List<Object> fetchAdminDetails(){
        return grievanceService.fetchAdminData();
    }

    @GetMapping("/agmTable")
    public List<Object> fetchagmTableData(){
        return grievanceService.fetchAgmDetails();
    }

    @GetMapping("/gmTable")
    public List<Object> fetchgmTableData(){
        return grievanceService.fetchgmDetails();
    }



}
