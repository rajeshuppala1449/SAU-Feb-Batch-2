package com.rajesh.task1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {
	
	public static void main(String args[]) {
		ApplicationContext ac=new AnnotationConfigApplicationContext(AppConfig.class);
		
		Rectangle rectangle = ac.getBean(Rectangle.class);
		Rectangle1 rectangle1 = ac.getBean(Rectangle1.class);
		
		rectangle.draw();
		rectangle1.draw();
		
	}

}
