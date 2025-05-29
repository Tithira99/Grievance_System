package com.example.GrievanceHandling.Service;

import com.example.GrievanceHandling.Entity.Employee;

import com.example.GrievanceHandling.Repository.EmployeeRepository;
import com.example.GrievanceHandling.error.EmployeeNotFoundException;
import com.example.GrievanceHandling.error.UserNameNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.MethodArgumentNotValidException;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@Service
public class
EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public Employee saveEmployee(Employee employee) {

        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> fetchEmployeeList() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee fetchEmployeeById(String empId) throws EmployeeNotFoundException {
         Optional<Employee> employee=
                 employeeRepository.findById(empId);

         if(!employee.isPresent()){
             throw new EmployeeNotFoundException("Employee not Available");
         }

         return employee.get();
    }

    @Override
    public void deleteEmployeeById(String empId) {
        employeeRepository.deleteById(empId);
    }

    @Override
    public Employee updateEmployee(String empId, Employee employee) {
        Employee empDb= employeeRepository.findById(empId).get();

        if(Objects.nonNull(employee.getEmployeeName()) && !"".equalsIgnoreCase(employee.getEmployeeName())){
            empDb.setEmployeeName(employee.getEmployeeName());
        }
        if(Objects.nonNull(employee.getDivision()) && !"".equalsIgnoreCase(employee.getDivision())){
            empDb.setDivision(employee.getDivision());
        }
        if(Objects.nonNull(employee.getDepartment()) && !"".equalsIgnoreCase(employee.getDepartment())){
            empDb.setDepartment(employee.getDepartment());
        }
        if(Objects.nonNull(employee.getPost()) && !"".equalsIgnoreCase(employee.getPost())){
            empDb.setPost(employee.getPost());
        }
        if(Objects.nonNull(employee.getRole()) && !"".equalsIgnoreCase(employee.getRole())){
            empDb.setRole(employee.getRole());
        }
        if(Objects.nonNull(employee.getEmail()) && !"".equalsIgnoreCase(employee.getEmail())){
            empDb.setEmail(employee.getEmail());
        }
        if(Objects.nonNull(employee.getLineManager()) && !"".equalsIgnoreCase(employee.getLineManager())){
            empDb.setLineManager(employee.getLineManager());
        }
        if(Objects.nonNull(employee.getMobileNumber()) && !"".equalsIgnoreCase(employee.getMobileNumber())){
            empDb.setMobileNumber(employee.getMobileNumber());
        }
        if(Objects.nonNull(employee.getUserName()) && !"".equalsIgnoreCase(employee.getUserName())){
            empDb.setUserName(employee.getUserName());
        }
        if(Objects.nonNull(employee.getPassword()) && !"".equalsIgnoreCase(employee.getPassword())){
            empDb.setPassword(employee.getPassword());
        }
        return employeeRepository.save(empDb);
    }

    @Override
    public List<Employee> fetchEmployeeByName(String employeeName) {
        return employeeRepository.findByEmployeeName(employeeName);
    }

    @Override
    public Employee fetchEmployeeByUserName(String userName) throws UserNameNotFoundException {


        Optional<Employee> employee=
                employeeRepository.findByUserName(userName);

        if(!employee.isPresent()){
            throw new UserNameNotFoundException("Invalid UserName");
        }
        return employee.get();

    }

    @Override
    public List<Object> getlineManagerDetails(String lineManagerId) {
        return employeeRepository.findByLineManager(lineManagerId);
    }

    @Override
    public List<Employee> getlineManagers() {
        return employeeRepository.findByRole();
    }

}
