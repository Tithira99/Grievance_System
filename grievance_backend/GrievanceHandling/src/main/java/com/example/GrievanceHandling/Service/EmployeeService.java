package com.example.GrievanceHandling.Service;

import com.example.GrievanceHandling.Entity.Employee;
import com.example.GrievanceHandling.error.EmployeeNotFoundException;
import com.example.GrievanceHandling.error.UserNameNotFoundException;


import java.util.List;

public interface EmployeeService {


    public Employee saveEmployee(Employee employee);

    public List<Employee> fetchEmployeeList();

    public Employee fetchEmployeeById(String empId) throws EmployeeNotFoundException;

    public void deleteEmployeeById(String empId);


    public Employee updateEmployee(String empId, Employee employee);


    public List<Employee> fetchEmployeeByName(String employeeName);

    public Employee fetchEmployeeByUserName(String userName) throws UserNameNotFoundException;

    public List<Object> getlineManagerDetails(String lineManagerId);


    public List<Employee> getlineManagers();
}
