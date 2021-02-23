import java.util.*;
import java.io.*;
class HighScore {
    static void findhigh(){
    HashMap<Integer, Integer> hmap = new HashMap<Integer, Integer>();
     Map<Integer, String> map;
    try{  
    
    ObjectInputStream in=new ObjectInputStream(new FileInputStream("student.txt"));  
    Student s=(Student)in.readObject();  
    hmap.put(s.roll,s.marks);
    while(s!=null){
        //System.out.println(s.roll+" "+s.marks);
        s=(Student)in.readObject();
        hmap.put(s.roll,s.marks);
    }
        //System.out.println(s.roll+" "+s.marks);
    in.close();  
    }catch(Exception e){System.out.println(e);}  

    map = sortValues(hmap); 
    

    try (PrintWriter writer = new PrintWriter(new File("test.csv"))) {

      StringBuilder sb = new StringBuilder();
      sb.append("SNo");
      sb.append(',');
      sb.append("rollno");
      sb.append(',');
      sb.append("Marks");
      sb.append('\n');

      Set s=map.entrySet();
    
    Iterator itr = s.iterator();
    int i=1;
    while(itr.hasNext()){
        Map.Entry me=(Map.Entry) itr.next();
        sb.append(""+i);
        sb.append(',');
        sb.append(""+me.getKey());
        sb.append(',');
        sb.append(""+me.getValue());
        sb.append('\n');
        //System.out.println(me.getKey()+""+me.getValue());
    }



      writer.write(sb.toString());

      System.out.println("done!");

    } catch (FileNotFoundException e) {
      System.out.println(e.getMessage());
    }
    
    }


    private static HashMap sortValues(HashMap map)   
    {   
        List list = new LinkedList(map.entrySet());  
       
        Collections.sort(list, new Comparator()   
        {  
        public int compare(Object o1, Object o2)   
        {  
        return ((Comparable) ((Map.Entry) (o2)).getValue()).compareTo(((Map.Entry) (o1)).getValue());  
        }  
        });  
        
        HashMap sortedHashMap = new LinkedHashMap();  
        for (Iterator it = list.iterator(); it.hasNext();)   
        {  
        Map.Entry entry = (Map.Entry) it.next();  
        sortedHashMap.put(entry.getKey(), entry.getValue());  
        }   
        return sortedHashMap;  
    }  
}