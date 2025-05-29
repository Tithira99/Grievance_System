package com.example.GrievanceHandling.Entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="files")
public class ImageModel {

    @Id
    /*
    @GeneratedValue(strategy= GenerationType.SEQUENCE,generator="ISequence")
    @GenericGenerator(name="ISequence", strategy="com.example.GrievanceHandling.Entity.IDGenerator",
            parameters = {

                    @org.hibernate.annotations.Parameter(name=IDGenerator.PREFIX_PARAMETER, value="IMG_"),
                    @org.hibernate.annotations.Parameter(name=IDGenerator.NUMBER_FORMAT_PARAMETER, value="%05d")
            })*/

    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long imageId;
    private String name;
    private String type;
    @Lob
    @Column(name="pic_byte", length = 1000)
    private byte[] picByte;
    private  String grievanceId;



    public ImageModel(Long imageId) {
        this.imageId = imageId;
    }


    public ImageModel() {
    }

    public ImageModel(String name, String type, byte[] picByte, String grievanceId) {
        this.name = name;
        this.type = type;
        this.picByte = picByte;
        this.grievanceId = grievanceId;
    }

    public ImageModel(String name, String type, byte[] picByte) {
        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }

    public ImageModel(Long imageId, String name, String type, byte[] picByte) {
        this.imageId = imageId;
        this.name = name;
        this.type = type;
        this.picByte = picByte;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    public String getGrievanceId() {
        return grievanceId;
    }

    public void setGrievanceId(String grievanceId) {
        this.grievanceId = grievanceId;
    }



}
