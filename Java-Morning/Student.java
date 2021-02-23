import java.io.Serializable; 
class Student implements Serializable{
Student(int roll,int marks){
    this.roll=roll;
    this.marks=marks;
}
Integer roll;
Integer marks;
}