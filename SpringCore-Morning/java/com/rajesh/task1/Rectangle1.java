package com.rajesh.task1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

public class Rectangle1 {
	
	private Point point1;
	private Point point2;
	private Point point3;
	private Point point4;
	
	
	@Autowired
	public void getPoints(List<Point> points) {
		this.point1=points.remove(0);
		this.point2=points.remove(0);
		this.point3=points.remove(0);
		this.point4=points.remove(0);
	}
	
	public void draw() {
		System.out.println("In Rectangle1");
		System.out.println("point 1 x: "+point1.x +" y: "+point1.y);
		System.out.println("point 2 x: "+point2.x +" y: "+point2.y);
		System.out.println("point 3 x: "+point3.x +" y: "+point3.y);
		System.out.println("point 4 x: "+point4.x +" y: "+point4.y);
		
	}
	
	

}
