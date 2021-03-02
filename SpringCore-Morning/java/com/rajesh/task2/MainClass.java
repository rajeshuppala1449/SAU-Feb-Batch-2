package com.rajesh.task2;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import com.rajesh.task2.Student;

public class MainClass {
    public static void main(String[] args)throws Exception {
        AbstractApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        Student s = context.getBean(Student.class);
        s.getName();
        int roll = s.getRoll();
        System.out.println(roll);
        s.getCourse("CSE");
    }
}
