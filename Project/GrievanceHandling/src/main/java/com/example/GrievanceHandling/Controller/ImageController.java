package com.example.GrievanceHandling.Controller;

import com.example.GrievanceHandling.Entity.ImageModel;
import com.example.GrievanceHandling.Entity.Response;
import com.example.GrievanceHandling.Repository.ImageRepository;
import com.example.GrievanceHandling.Service.ImageService;
import com.example.GrievanceHandling.error.FileStorageException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;


@RestController
@RequestMapping("image")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class ImageController {

    @Autowired
    private ImageService imageService;

   /* @PostMapping("/upload")
    public ResponseEntity.BodyBuilder uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {

        return imageService.uploadImage(file);

    }

 */

    @PostMapping("/uploadFile")
    public Response uploadFile(@RequestParam("file") MultipartFile file, String grievanceId) {

        ImageModel image=imageService.storeFile(file,grievanceId);

        String fileDownloadLink= ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(image.getName())
                .toUriString();

        return new Response(image.getName(), fileDownloadLink, file.getContentType(), file.getSize());

    }


    @PostMapping("/uploadMultipleFiles")
    public List<Response> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files, String grievanceId){

        return Arrays.asList(files)
                .stream()
                .map(file->uploadFile(file, grievanceId))
                .collect(Collectors.toList());
    }

    @GetMapping(path="/get/{id}")
    public ImageModel getImage(@PathVariable("id") Long imageId){
        return imageService.getImage(imageId);

    }



    @GetMapping("/downloadFile/{fileId:.+}")
    public ResponseEntity<Resource>downloadFile(@PathVariable("fileId") Long imageId, HttpServletRequest request) {
        ImageModel imageM= imageService.getImage(imageId);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(imageM.getType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\""+imageM.getName()+"\"")
                .body(new ByteArrayResource(imageM.getPicByte()));
    }

    @GetMapping("/displayfile/{grievanceId:.+}")
    public List<ImageModel>displayFile(@PathVariable("grievanceId") String grievanceId) {
        List<ImageModel> imageM= imageService.getImageByGid(grievanceId);

        return imageM;
    }








}


