import java.util.LinkedList; 
  
public class ProducerConsumer { 
    public static void main(String[] args) 
        throws InterruptedException 
    { 
        final Production obj = new Production(); 
        obj.list.add(1);
        obj.list.add(2);
        obj.list.add(3);
  
    
        Thread t1 = new Thread(new Runnable() { 
           
            public void run() 
            { 
                try { 
                    obj.produce(); 
                } 
                catch (InterruptedException e) { 
                    e.printStackTrace(); 
                } 
            } 
        }); 
  
 
        Thread t2 = new Thread(new Runnable() { 
         
            public void run() 
            { 
                try { 
                    obj.consume(); 
                } 
                catch (InterruptedException e) { 
                    e.printStackTrace(); 
                } 
            } 
        }); 
  
        t1.start(); 
        t2.start(); 
  

        t1.join(); 
        t2.join(); 
    } 
  

    public static class Production { 

        LinkedList<Integer> list = new LinkedList<>();

        int capacity = 3; 
  
        public void produce() throws InterruptedException 
                { 
            int value = 4; 
            while (true) { 
                synchronized (this) 
                { 
                    while (list.size() == capacity) 
                        wait(); 
                    System.out.println("Producer produced-"
                                       + value); 
                    list.add(value++); 
                    notify(); 
                    Thread.sleep(1000); 
                } 
            } 
        } 
  
       
        public void consume() throws InterruptedException 
        { 
            while (true) { 
                synchronized (this) 
                { 
                    while (list.size() == 0) 
                        wait(); 
                    int val = list.removeFirst();
                    System.out.println("Consumer consumed-"
                                       + val); 
                    notify(); 
                    Thread.sleep(1000); 
                } 
            } 
        } 
    } 
} 