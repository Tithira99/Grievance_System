package com.example.GrievanceHandling.Controller;

import com.example.GrievanceHandling.Entity.Grievance;
import com.example.GrievanceHandling.Entity.GrievanceTime;
import com.example.GrievanceHandling.Repository.GrievanceTimeRepository;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class GrievanceTimeController {

    @Autowired
    private GrievanceTimeRepository grievanceTimeRepository;

    @PostMapping("/grievances/time/{div}")
    public GrievanceTime saveGrievanceTime(@PathVariable("div") String division, @Valid @RequestBody Grievance grievance) throws ParseException {
        long duration=getDuration(grievance);

        GrievanceTime grievanceTime=new GrievanceTime(grievance.getGrievanceID(),duration, division);

        return grievanceTimeRepository.save(grievanceTime);
    }


    @GetMapping("/grievances/time")
    public List<GrievanceTime> getGrievanceTime() {

        return grievanceTimeRepository.findAll();
    }
    @GetMapping("/grievances/time/{div}")
    public List<GrievanceTime> getGrievanceTimeBydiv(@PathVariable("div") String division) {

        return grievanceTimeRepository.findByDivision(division);
    }


    public static long getDuration(Grievance grievance) throws ParseException {
        Date date = new Date();



        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss", Locale.ENGLISH);
        String now = sdf.format(date);
        String placed = sdf.format(grievance.getGrievanceDate());



        Date firstDate = sdf.parse(now);
        Date secondDate = sdf.parse(placed);


        long diffInMillies = firstDate.getTime() - secondDate.getTime();
        long diff = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);



        return diff;







    }
}
