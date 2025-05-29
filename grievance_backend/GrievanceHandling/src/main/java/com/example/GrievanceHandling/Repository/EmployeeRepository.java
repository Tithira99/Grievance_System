package com.example.GrievanceHandling.Repository;

import com.example.GrievanceHandling.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository <Employee, String>{

    @Query(value="SELECT * FROM employee WHERE employee_name LIKE ?1%", nativeQuery=true)
     public List<Employee> findByEmployeeName(String employeeName);

    @Query(value="SELECT * FROM employee WHERE user_name = ?1", nativeQuery=true)
    public Optional<Employee> findByUserName(String userName);


    @Query(value="SELECT g.grievanceid, g.grievance_description, e.department, g.grievance_status, g.grievance_date, e.employee_name FROM employee e   Inner JOIN grievance g ON e.employeeid = g.employeeid WHERE  e.line_manager LIKE ?1 and g.grievance_status NOT LIKE '%Approved%' and g.grievance_status NOT LIKE '%Rejected%'  ;", nativeQuery=true)
    public List<Object> findByLineManager(String lineManagerId);

    @Query(value="SELECT * FROM employee WHERE role LIKE '%Line Manager%'", nativeQuery=true)
    public List<Employee> findByRole();
}
