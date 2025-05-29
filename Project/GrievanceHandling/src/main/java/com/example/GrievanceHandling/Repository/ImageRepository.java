package com.example.GrievanceHandling.Repository;

import com.example.GrievanceHandling.Entity.Employee;
import com.example.GrievanceHandling.Entity.Grievance;
import com.example.GrievanceHandling.Entity.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImageRepository extends JpaRepository<ImageModel, Long> {
/*
    @Query(value="INSERT INTO files (image_id,name,pic_byte,type)VALUES (?1 , ?2, ?3, ?4)", nativeQuery=true)
    public ImageModel saveImage(String id, String name, String type, byte[] picbyte);

*/
    @Query(value="SELECT * FROM files WHERE grievance_id = ?1", nativeQuery=true)
    public List<ImageModel> findByGrievanceId(String grievanceId);


}
