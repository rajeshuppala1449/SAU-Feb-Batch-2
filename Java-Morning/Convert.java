import javax.xml.parsers.DocumentBuilderFactory;  
import javax.xml.parsers.DocumentBuilder;  
import org.w3c.dom.Document;  
import org.w3c.dom.NodeList;  
import org.w3c.dom.Node;  
import org.w3c.dom.Element;  
import java.io.File;  
import java.util.HashMap;
import java.io.Serializable; 
import java.io.*;
import java.util.*; 

public class Convert  
{  
public static void main(String argv[])   
{  

    HashMap<Integer, Integer> hmap = new HashMap<Integer, Integer>();
    int roll,marks,marks1;
try   
{  
  
File file = new File("file.xml");  

DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();  

DocumentBuilder db = dbf.newDocumentBuilder();  
Document doc = db.parse(file);  
doc.getDocumentElement().normalize();  
 
NodeList nodeList = doc.getElementsByTagName("student");  
 
for (int itr = 0; itr < nodeList.getLength(); itr++)   
{  
Node node = nodeList.item(itr);  

if (node.getNodeType() == Node.ELEMENT_NODE)   
{  
Element eElement = (Element) node;  
roll=Integer.parseInt(eElement.getElementsByTagName("roll").item(0).getTextContent());   

marks=Integer.parseInt(eElement.getElementsByTagName("marks").item(0).getTextContent()); 
         if(!hmap.containsKey(roll)){
                        hmap.put(roll,marks);
                    }else{
                        marks1=hmap.get(roll);
                        hmap.put(roll,marks+marks1);
                    }
}  
}  
}   
catch (Exception e)   
{  
e.printStackTrace();  
}  
//System.out.println(hmap);
try{  
  FileOutputStream fout=new FileOutputStream("student.txt");  
  ObjectOutputStream out=new ObjectOutputStream(fout); 

  Iterator hmapIterator = hmap.entrySet().iterator(); 

  while (hmapIterator.hasNext()) { 
            Map.Entry mapElement = (Map.Entry)hmapIterator.next(); 
            marks = (int)mapElement.getValue() ; 
            roll=(int)mapElement.getKey();  
            out.writeObject(new Student(roll,marks));  
        } 

    out.flush(); 

    HighScore.findhigh();
     }catch(Exception e){System.out.println(e);}  
}  
}  
