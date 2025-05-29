package com.example.GrievanceHandling.error;

public class GrievanceNotFoundException extends Exception {

    public GrievanceNotFoundException() {
        super();
    }

    public GrievanceNotFoundException(String message) {
        super(message);
    }

    public GrievanceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public GrievanceNotFoundException(Throwable cause) {
        super(cause);
    }

    protected GrievanceNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
