package com.rajesh.task2;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Student {

		int roll = 93;
        String name = "Rajesh";
        


        public void getName() {
            System.out.println("Hello  Rajesh");
        }

        public int getRoll()
        {
            return roll;
        }

        public void getCourse(String course)throws  Exception {

            System.out.println("Course = " + course);
            throw new RuntimeException();

        }


    }