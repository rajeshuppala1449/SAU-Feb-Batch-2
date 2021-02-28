class MultipleThread{
    public static void main(String args[]){


    MultiThread obj1=new MultiThread();
    MultiThread obj2=new MultiThread();
    MultiThread obj3=new MultiThread();
    obj1.start();
    obj2.start();
    obj3.start();
}
}

class MultiThread extends Thread{
    public  void run(){
        try{


                            String s="The above may not fit the traditional bill of a but since they contain information, they can be used towards documentary research."+
"Social scientists often conduct documentary research. It is mainly conducted to assess various documents in the interest of social or historical value. Sometimes, researchers also conduct documentary research to study various documents surrounding events or individuals."+
"Documentary research is similar to content analysis, which involves studying existing information recorded in media, texts, and physical items. Here, data collection from people is not required to conduct research. Hence, this is a prime example of secondary research.It"+
 "is important to consider the quality of the documents while using it as evidence on social relations and social meanings. Keep in mind that unlike surveys and research interviews, the documents are originally published/generated without keeping the purpose of research in mind."+
 "It is good practice to cross-verify documents against other similar documents before reaching a decision.";


    

            int i=0;
            int words=0;
            for(i=0;i<s.length();i++){
                words=words+1;
            }

            System.out.println(words);

        }catch(Exception e){
            e.printStackTrace();
        }
    }
}