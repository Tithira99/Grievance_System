package com.example.GrievanceHandling.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class GrievanceTime {
    @Id
    private String grievanceId1;
    private long timeDifference;
    private String division;

    public GrievanceTime() {

    }

    @Override
    public String toString() {
        return "GrievanceTime{" +
                "grievanceId1='" + grievanceId1 + '\'' +
                ", timeDifference=" + timeDifference +
                ", division='" + division + '\'' +
                '}';
    }

    public GrievanceTime(String grievanceId1, long timeDifference, String division) {
        this.grievanceId1 = grievanceId1;
        this.timeDifference = timeDifference;
        this.division = division;
    }

    public String getGrievanceId1() {
        return grievanceId1;
    }

    public void setGrievanceId1(String grievanceId1) {
        this.grievanceId1 = grievanceId1;
    }

    public long getTimeDifference() {
        return timeDifference;
    }

    public void setTimeDifference(long timeDifference) {
        this.timeDifference = timeDifference;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }
}
