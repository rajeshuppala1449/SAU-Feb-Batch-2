CREATE TABLE Product (
    Product_Code INTEGER,
    Product_Name VARCHAR(50),
    Unit_Price INTEGER,
    PRIMARY KEY (Product_Code)
);

CREATE TABLE  Sell(
		Product_Code integer,
        Executive_ID integer,
        Customer_ID integer
);

CREATE TABLE  SalesExecutive(
		Executive_ID integer,
        Executive_Name varchar(50),
        DOB date,
        Mobile_No integer,
        primary key(Executive_ID)
);

CREATE TABLE Grouped(
		Category_Code Integer,
        Product_Code Integer
);

CREATE TABLE Buy(
		Product_Code Integer,
        Customer_Id Integer,
        Date date,
        Units Integer
);

CREATE TABLE Has(
		Customer_Id Integer,
        Location_Code Integer
);

CREATE TABLE Category(
		Category_Code Integer,
        Category_Name VarChar(50),
        primary key(Category_Code)
);

CREATE TABLE Customer(
		Customer_Id Integer,
        Customer_Name varchar(50),
        DOB date,
        Mobile_No Integer,
        Gender varchar(10),
        primary key(Customer_Id)
);

CREATE TABLE Location(
		Location_Code Integer,
        Location_Name varchar(50),
        primary key(Location_Code)
);

insert into Product values(1,'Honda Activa',80000);
insert into Product values(2,'Hero Glamour',90000);
insert into Product values(3,'Royal Enfield',200000);
insert into Product values(4,'Pulsar',150000);

insert into SalesExecutive values(1,'Varun Sai','1799-11-05',89786);
insert into SalesExecutive values(2,'Sai Kumar','1997-10-27',76750);
insert into SalesExecutive values(3,'Vishnu','2005-04-18',98482);
insert into SalesExecutive values(4,'Rishi','1999-09-17',91823);

insert into Customer values(1,'Rahul','1989-9-17',88976,'Male');
insert into Customer values(2,'Rohit','2000-8-16',96409,'Male');
insert into Customer values(3,'Hardik','1979-06-14',89786,'Male');
insert into Customer values(4,'Kunal','1989-9-25',91828,'Male');

insert into Location values(1,'Hyderabad');
insert into Location values(2,'Secundrabad');
insert into Location values(3,'Mumbai');
insert into Location values(4,'chennai');

insert into Has values(1,1);
insert into Has values(2,2);
insert into Has values(3,3);
insert into Has values(4,4);

insert into Sell values(1,1,1);
insert into Sell values(2,2,2);
insert into Sell values(3,3,3);
insert into Sell values(4,4,4);

insert into Grouped values(1,1);
insert into Grouped values(1,3);

insert into Grouped values(2,3);
insert into Grouped values(4,2);

insert into Buy values(1,1,'2021-02-06',2);
insert into Buy values(2,2,'2021-02-07',3);
insert into Buy values(3,3,'2021-02-08',5);
insert into Buy values(4,4,'2021-02-09',4);
insert into Buy values(2,1,'2021-02-07',2);
insert into Buy values(1,2,'2021-02-11',5);

-- 2. Write a query to retrieve the most sold product per day in a specific location in the last week. You can pick the location of your choice.

select Product_Name,Location_Name from Product 
natural join Buy natural join Customer natural join Has natural join Location 
where Location_Name='Hyderabad' and 
Date between '2021-02-06' and'2021-02-13' order by Units desc limit 1;

-- 3. Write a query to list all the salesperson's details along with the count of products sold by them (if any) till the current date.

select Executive_ID,Executive_Name,Date,Mobile_No,sum(Units)
from SalesExecutive natural join Sell natural join Buy group by Executive_ID ;




