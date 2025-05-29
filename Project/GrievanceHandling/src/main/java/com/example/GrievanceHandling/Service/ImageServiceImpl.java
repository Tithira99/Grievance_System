package com.example.GrievanceHandling.Service;

import com.example.GrievanceHandling.Entity.ImageModel;
import com.example.GrievanceHandling.Repository.ImageRepository;
import com.example.GrievanceHandling.error.FileNotFoundException;
import com.example.GrievanceHandling.error.FileStorageException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@Service
public class ImageServiceImpl implements ImageService {


    @Autowired
    private ImageRepository imageRepository;
/*
    @Override
    public ResponseEntity.BodyBuilder uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        System.out.println("Original Image Byte Size: " + file.getBytes().length);
        ImageModel img= new ImageModel(file.getOriginalFilename(), file.getContentType(), compressBytes(file.getBytes()));
        imageRepository.save(img);
        return ResponseEntity.status(HttpStatus.OK);
    }

   @Override
    public ImageModel getImage(Long imageId, Long grievanceId) {
        final Optional<ImageModel> retrievedImage=imageRepository.findById(imageId);
        ImageModel img=new ImageModel(retrievedImage.get().getName(),retrievedImage.get().getType(), decompressBytes(retrievedImage.get().getPicByte(), grievanceId));

        return img;
    }*/

    @Override
    public List<ImageModel> getImageByGid(String grievanceId) {

        return imageRepository.findByGrievanceId(grievanceId);

    }

    @Override
    public ImageModel storeFile(MultipartFile file,String grievanceId){

        String fileName= StringUtils.cleanPath(file.getOriginalFilename());

        try{
            if(fileName.contains("..")){

                throw new FileStorageException("Sorry! Filename contains invalid path sequenc " + fileName);

            }

            ImageModel imageMd= new ImageModel(fileName, file.getContentType(), file.getBytes(), grievanceId);

            return imageRepository.save(imageMd);

        }catch(IOException ex){
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }


    }

    @Override
    public ImageModel getImage(Long imageId) {

        return imageRepository.findById(imageId)
                .orElseThrow(() -> new FileNotFoundException("File not found with id " + imageId));
    }
/*
   public static byte[] compressBytes(byte[] data){

        Deflater deflater=new Deflater();
        deflater.setInput(data);
        ByteArrayOutputStream outputStream=new ByteArrayOutputStream(data.length);
        byte[] buffer= new byte[1024];
        while (!deflater.finished()){
            int count= deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);

        }
        try{

            outputStream.close();

        }catch(IOException e){

        }
        System.out.println("Compressed Image Byte Size: " + outputStream.toByteArray().length);
        return outputStream.toByteArray();
    }

    public static byte[] decompressBytes(byte[] data){

        Inflater inflater=new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream=new ByteArrayOutputStream(data.length);
        byte[] buffer= new byte[1024];

        try{
            while (!inflater.finished()){
                int count= inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);

            }

            outputStream.close();

        }catch(IOException e){

        }catch(DataFormatException e){

        }

        return outputStream.toByteArray();
    }


*/



}


