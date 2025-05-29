package com.example.GrievanceHandling.Repository;

import com.example.GrievanceHandling.Entity.Grievance;
import com.example.GrievanceHandling.Entity.GrievanceTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GrievanceTimeRepository extends JpaRepository<GrievanceTime, String> {

    @Query(value="SELECT * FROM grievance_time WHERE division = ?1", nativeQuery=true)
    public List<GrievanceTime> findByDivision(String division);
}
