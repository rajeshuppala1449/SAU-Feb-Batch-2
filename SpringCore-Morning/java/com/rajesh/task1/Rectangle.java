package com.rajesh.task1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Rectangle {
	
	private int height;
	private int width;
	
	@Autowired
	@Qualifier("point1")
	private Point point1;
	
	@Autowired
	@Qualifier("point2")
	private Point point2;
	
	@Autowired
	@Qualifier("point3")
	private Point point3;
	
	@Autowired
	@Qualifier("point4")
	private Point point4;
	

	
	
	
	public Rectangle(int h,int w) {
		this.height=h;
		this.width=w;
	}
	
	public Point getPoint1() {
		return point1;
	}
	public void setPoint1(Point point1) {
		this.point1 = point1;
	}
	public Point getPoint2() {
		return point2;
	}
	public void setPoint2(Point point2) {
		this.point2 = point2;
	}
	public Point getPoint3() {
		return point3;
	}
	public void setPoint3(Point point3) {
		this.point3 = point3;
	}
	public Point getPoint4() {
		return point4;
	}
	public void setPoint4(Point point4) {
		this.point4 = point4;
	}
	
	public void draw() {
		System.out.println("point 1 x: "+point1.x +" y: "+point1.y);
		System.out.println("point 2 x: "+point2.x +" y: "+point2.y);
		System.out.println("point 3 x: "+point3.x +" y: "+point3.y);
		System.out.println("point 4 x: "+point4.x +" y: "+point4.y);
		System.out.println("length: "+this.height+" width: "+this.width);
	}

}
