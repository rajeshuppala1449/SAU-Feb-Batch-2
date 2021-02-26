import java.util.*;
import java.io.*;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.parsers.DocumentBuilder;

import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import org.w3c.dom.NamedNodeMap;

public class Merge {
 
    public static void main(String[] args)throws Exception {
        try{
         File input1 = new File("file1.xml");
            File input2 = new File("file2.xml");
  
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document document1 = dBuilder.parse(input1);
            Document document2 = dBuilder.parse(input2);

            Document outputDoc = dBuilder.newDocument();

            Element rootElement = outputDoc.createElement("CSR_Producer");
            outputDoc.appendChild(rootElement);

            document1.getDocumentElement().normalize();
            NodeList producerNodes1 = document1.getElementsByTagName("CSR_Producer");
            document2.getDocumentElement().normalize();
            NodeList producerNodes2 = document1.getElementsByTagName("CSR_Producer");
           for (int i = 0; i < producerNodes1.getLength(); i++) {
                Node currNode1 = producerNodes1.item(i);
                Element currElement1 = (Element) currNode1;

                for (int j = 0; j < producerNodes2.getLength(); j++) {

                    Node currNode2 = producerNodes2.item(j);
                    Element currElement2 = (Element) currNode2;


                    if (currElement1.getAttribute("NIPR_Number").equals(currElement2.getAttribute("NIPR_Number"))) {
                        NodeList licenseNodes1 = currElement1.getElementsByTagName("License");

                        for (int k = 0; k < licenseNodes1.getLength(); k++) {
                            Element license1 = (Element) licenseNodes1.item(k);

                            NodeList licenseNodes2 = currElement2.getElementsByTagName("License");

                            for (int l = 0; l < licenseNodes2.getLength(); l++) {
                                Element license2 = (Element) licenseNodes2.item(l);

                                if (license1.getAttribute("State_Code").equals(license2.getAttribute("State_Code"))
                                        && license1.getAttribute("License_Number")
                                                .equals(license2.getAttribute("License_Number"))
                                        && license1.getAttribute("Date_Status_Effective")
                                                .equals(license2.getAttribute("Date_Status_Effective")))
                                                 {
                                    
                                     try {
                                 
                                 Node valid_license = outputDoc.importNode(license2, true);
                                    rootElement.appendChild(valid_license);
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }
                                }}}}}
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
             transformer.setOutputProperty(OutputKeys.INDENT, "yes");
            DOMSource source = new DOMSource(outputDoc);

            // write to console or file
            StreamResult console = new StreamResult(System.out);
            StreamResult file = new StreamResult(new File("merged.xml"));

            // write data
            transformer.transform(source, console);
            transformer.transform(source, file);
           }}
                            catch(Exception e){
                                   e.printStackTrace();
                            }}

 

                        
                        }