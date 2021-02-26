import java.util.*;
import java.io.*;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.parsers.DocumentBuilder;
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
 public class ValidLicense {

    public static void main(String[] args)throws Exception {
            File inputXML1 = new File("file1.xml");
            File inputXML2 = new File("file2.xml");
           DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document document1 = dBuilder.parse(inputXML1);
            Document document2 = dBuilder.parse(inputXML2);

            Document outputDoc = dBuilder.newDocument();

            Element rootElement = outputDoc.createElement("CSR_Producer");
            outputDoc.appendChild(rootElement);
            document1.getDocumentElement().normalize();
            NodeList producerNodes1 = document1.getElementsByTagName("CSR_Producer");
             for (int i = 0; i < producerNodes1.getLength(); i++) {
                Node nNode = producerNodes1.item(i);
                Element currElement = (Element) nNode;
                NodeList licenses = currElement.getElementsByTagName("License");
            
                for (int j = 0; j < licenses.getLength(); j++) {
                    Node nnNode = licenses.item(j);
                    Element childelement = (Element) nnNode;

                    boolean isExpiredLicense = isLicenseExpired(childelement);
                    if (isExpiredLicense == false) {
                                Node valid_license = outputDoc.importNode(childelement, true);
                                    rootElement.appendChild(valid_license);
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }
                    }}
            document2.getDocumentElement().normalize();
            NodeList producerNodes2 = document1.getElementsByTagName("CSR_Producer");
            for (int i = 0; i < producerNodes2.getLength(); i++) {
                Node nNode = producerNodes2.item(i);
                Element currElement = (Element) nNode;
                NodeList licenses = currElement.getElementsByTagName("License");
         
                for (int j = 0; j < licenses.getLength(); j++) {
                    Node nnNode = licenses.item(j);
                    Element childelement = (Element) nnNode;
                boolean isExpiredLicense = isLicenseExpired(childelement);
                    if (isExpiredLicense == false) {
                                Node valid_license = outputDoc.importNode(childelement, true);
                                    rootElement.appendChild(valid_license);
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }
                    }}
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();

            
            transformer.setOutputProperty(OutputKeys.INDENT, "yes");
            DOMSource source = new DOMSource(outputDoc);

            
            StreamResult console = new StreamResult(System.out);
            StreamResult file = new StreamResult(new File("valid.xml"));
            transformer.transform(source, console);
            transformer.transform(source, file);
                
          // All the required methods
    }
          
    private static int compareDates(String expiryDate) throws ParseException {
        SimpleDateFormat sdfo = new SimpleDateFormat("dd/MM/yyyy");
       Date d1 = sdfo.parse(expiryDate);
        Date d2 = sdfo.parse(getTodaysDate());
       if (d1.compareTo(d2) > 0) {
            return 1;
        }
     else if (d1.compareTo(d2) < 0) {
            return -1;
        }
       return 0;
    }


    private static String getTodaysDate() {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDateTime now = LocalDateTime.now();
        return dtf.format(now).toString();
    }
    private static boolean isLicenseExpired(Element childelement) throws ParseException {
        String expiryDate = childelement.getAttribute("License_Expiration_Date");
        return compareDates(expiryDate) < 0 ? true : false;
    }

    private static void writeToFile(Document outputDoc, Element rootElement, Element curr_license) {
        try {
            Node valid_license = outputDoc.importNode(curr_license, true);
            rootElement.appendChild(valid_license);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
 }