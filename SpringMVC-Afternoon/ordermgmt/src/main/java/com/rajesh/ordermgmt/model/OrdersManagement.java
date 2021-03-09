package com.rajesh.ordermgmt.model;

import java.util.*;

public class OrdersManagement {
    private HashMap<Integer, Order> ordersList = new HashMap<>();

    public boolean setOrdersList(Order order) {
        if(ordersList.containsKey(order.getId())){
            return false;
        }
        ordersList.put(order.getId(), order);
        return true;
    }

    public boolean removeOrder(int orderId){
        this.ordersList.remove(orderId);
        return true;
    }

    public List<Order> getOrdersList() {
        List<Order> orders = new ArrayList<>();
        for(Map.Entry<Integer, Order> entry : ordersList.entrySet()){
            orders.add(entry.getValue());
        }
        return orders;
    }

    public Order getOrder(int orderId){
        if(ordersList.containsKey(orderId)){
            return ordersList.get(orderId);
        }
        return null;
    }
}