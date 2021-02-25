class SingletonClass {
    public static void main(String args[]){
        Person p=Person.getInstance("rajesh",21);
        System.out.println(p.name);
        Person p1=Person.getInstance("ramesh",21);
        System.out.println(p.name);
    }
}

class Person{
    public String name;
    public int age;
    private static Person instance=null;
    private Person(String name,int age){
        this.name=name;
        this.age=age;
    }

    public static Person getInstance(String name,int age){
            if(instance==null){
                instance=new Person(name,age);
    }
            return instance;
    
}
}