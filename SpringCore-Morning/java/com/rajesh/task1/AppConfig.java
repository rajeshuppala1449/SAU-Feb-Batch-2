package com.rajesh.task1;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class AppConfig {
	

	@Bean
	public Rectangle getRectangle() {
		
		return new Rectangle(10,6);
		
	}
	
	@Bean
	public Rectangle1 getRectangle1() {	
		return new Rectangle1();
	}
	
	@Bean
	public java.util.List<Point> sendPoints(){
		return Arrays.asList(new Point(0,0),new Point(0,5),new Point(5,0),new Point(5,5));
	}
	
	@Bean(name="point1")
	public Point getPoint1() {
		return new Point(0,0);
	}
	
	@Bean(name="point2")
	public Point getPoint2() {
		return new Point(0,5);
	}
	
	@Bean(name="point3")
	public Point getPoint3() {
		return new Point(5,0);
	}
	
	@Bean(name="point4")
	public Point getPoint4() {
		return new Point(5,5);
	}

}
