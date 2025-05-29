package com.example.GrievanceHandling.Repository;

import com.example.GrievanceHandling.Entity.Grievance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface GrievanceRepository extends JpaRepository<Grievance, String> {

    @Query(value="SELECT * FROM grievance WHERE employeeid = ?1", nativeQuery=true)
    public List<Grievance> findByEmployeeID(String employeeId);

    @Query(value="SELECT g.grievanceid, g.grievance_description, e.department, g.grievance_status, g.grievance_date, e.employee_name, g.agm_response, g.gm_response FROM grievance g Inner JOIN employee e ON g.employeeid=e.employeeid WHERE g.grievance_status NOT LIKE '%Grievance Placed%' and g.grievance_status NOT LIKE '%Approved%' and g.grievance_status NOT LIKE '%Rejected%'", nativeQuery=true)
    public List<Object> findByGrievanceStatus();

    @Query(value="SELECT g.grievanceid, g.grievance_description, e.department, g.grievance_status, g.grievance_date, e.employee_name, g.agm_response, g.gm_response FROM grievance g Inner JOIN employee e ON g.employeeid=e.employeeid WHERE  g.grievance_status NOT LIKE '%Admin Received%' and  g.grievance_status NOt LIKE '%Grievance Placed%' and g.grievance_status NOT LIKE '%Approved%' and  g.grievance_status NOT LIKE '%Rejected%';", nativeQuery=true)
    public List<Object> findByGrievanceStatus1();

    @Query(value="SELECT g.grievanceid, g.grievance_description, e.department, g.grievance_status, g.grievance_date, e.employee_name, g.agm_response, g.gm_response FROM grievance g Inner JOIN employee e ON g.employeeid=e.employeeid WHERE   grievance_status NOT LIKE '%AGM Received%'and grievance_status NOT LIKE '%Admin Received%' and  grievance_status NOT LIKE '%Grievance Placed%' and grievance_status NOT LIKE '%Approved%' and  grievance_status NOT LIKE '%Rejected%';", nativeQuery=true)
    public List<Object> findByGrievanceStatus2();

}
