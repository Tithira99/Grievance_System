package com.example.GrievanceHandling.Entity;

public class Response {

    private String fileName;
    private String fileDownloadLink;
    private String fileType;
    private long size;

    public Response(String fileName, String fileDownloadLink, String fileType, long size) {
        this.fileName = fileName;
        this.fileDownloadLink = fileDownloadLink;
        this.fileType = fileType;
        this.size = size;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileDownloadLink() {
        return fileDownloadLink;
    }

    public void setFileDownloadLink(String fileDownloadLink) {
        this.fileDownloadLink = fileDownloadLink;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }




}
