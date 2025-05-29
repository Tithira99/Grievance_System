package com.example.GrievanceHandling.Controller;

import com.example.GrievanceHandling.Entity.Employee;
import com.example.GrievanceHandling.Service.EmployeeService;
import com.example.GrievanceHandling.error.EmployeeNotFoundException;
import com.example.GrievanceHandling.error.UserNameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/employees")
    public Employee saveEmployee(@Valid @RequestBody Employee employee) {
            return employeeService.saveEmployee(employee);
    }

    @GetMapping("/employees")
    public List<Employee> fetchEmployeeList(){
        return employeeService.fetchEmployeeList();
    }

    @GetMapping("/employees/{id}")
    public Employee fetchEmployeeById(@PathVariable("id") String empId) throws EmployeeNotFoundException {
        return employeeService.fetchEmployeeById(empId);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployeeById(@PathVariable("id") String empId){
        employeeService.deleteEmployeeById(empId);
        Map<String, Boolean> response=new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);


    }
    @PutMapping("employees/{id}")
    public Employee updateEmployee(@PathVariable("id") String empId, @RequestBody Employee employee) throws EmployeeNotFoundException {
        employeeService.fetchEmployeeById(empId);
        return employeeService.updateEmployee(empId, employee);
    }

    @GetMapping("/employees/name/{name}")
    public List<Employee> fetchEmployeeByName(@PathVariable("name") String employeeName){
        return employeeService.fetchEmployeeByName(employeeName);
    }

    @GetMapping("/employees/username/{username}")
    public Employee fetchEmployeeByUserName(@PathVariable("username") String userName) throws UserNameNotFoundException {

        return employeeService.fetchEmployeeByUserName(userName);
    }

    @GetMapping("/lineManagerDetails/{id}")
    public List<Object> fetLineManagerDetails(@PathVariable("id") String lineManagerId){
        return employeeService.getlineManagerDetails(lineManagerId);
    }

    @GetMapping("employees/lineManagers")
    public List<Employee> fetchLineManagers(){
        return employeeService.getlineManagers();
    }

}
