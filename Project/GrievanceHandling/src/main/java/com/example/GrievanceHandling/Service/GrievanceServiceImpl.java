package com.example.GrievanceHandling.Service;

import com.example.GrievanceHandling.Entity.Employee;
import com.example.GrievanceHandling.Entity.Grievance;
import com.example.GrievanceHandling.Repository.GrievanceRepository;
import com.example.GrievanceHandling.error.EmployeeNotFoundException;
import com.example.GrievanceHandling.error.GrievanceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.parser.Part;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class GrievanceServiceImpl implements GrievanceService{

    @Autowired
    private GrievanceRepository grievanceRepository;

    @Override
    public Grievance saveGrievance(Grievance grievance) {
        return grievanceRepository.save(grievance);
    }

    @Override
    public List<Grievance> fetchGrievanceList() {
        return grievanceRepository.findAll();
    }

    @Override
    public Grievance fetchGrievanceById(String grievanceID) throws GrievanceNotFoundException {
        Optional<Grievance> grievance=
                grievanceRepository.findById(grievanceID);

        if(!grievance.isPresent()){
            throw new GrievanceNotFoundException("Employee not Available");
        }

        return grievance.get();


    }

    @Override
    public void deleteGrievanceById(String grievanceId) {
        grievanceRepository.deleteById(grievanceId);
    }

    @Override
    public Grievance updateGrievance(String grievanceId, Grievance grievance) {
        Grievance gDB= grievanceRepository.findById(grievanceId).get();

        if(!"Grievance Placed".equalsIgnoreCase(grievance.getGrievanceStatus())){
            gDB.setGrievanceStatus(grievance.getGrievanceStatus());
        }

        if(!"Not Received".equalsIgnoreCase(grievance.getGrievanceStatus())){
            gDB.setLineManagerAction(grievance.getLineManagerAction());
        }

        if(!"Not Received".equalsIgnoreCase(grievance.getGrievanceStatus())){
            gDB.setAgmResponse(grievance.getAgmResponse());
        }

        if(!"Not Received".equalsIgnoreCase(grievance.getGrievanceStatus())){
            gDB.setGmResponse(grievance.getGmResponse());
        }

        if(!"Pending".equalsIgnoreCase(grievance.getGrievanceStatus())){
            gDB.setGrievanceSolution(grievance.getGrievanceSolution());
        }

        return grievanceRepository.save(gDB);


    }

    @Override
    public List<Grievance> fetchGrievanceByEmployeeID(String employeeId) {
        return grievanceRepository.findByEmployeeID(employeeId);
    }


    @Override
    public List<Object> fetchAdminData() {
        return grievanceRepository.findByGrievanceStatus();
    }

    @Override
    public List<Object> fetchAgmDetails() {
        return grievanceRepository.findByGrievanceStatus1();
    }

    @Override
    public List<Object> fetchgmDetails() {

        return grievanceRepository.findByGrievanceStatus2();
    }
}

