package com.example.GrievanceHandling.Service;

import com.example.GrievanceHandling.Entity.ImageModel;
import com.example.GrievanceHandling.error.FileStorageException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

public interface ImageService {
  /*  public ResponseEntity.BodyBuilder uploadImage(MultipartFile file) throws IOException;

    public ImageModel getImage(Long imageId);
*/
    public ImageModel storeFile(MultipartFile file, String grievanceId);


    public ImageModel getImage(Long imageId);

    public List<ImageModel> getImageByGid(String grievanceId);
}
