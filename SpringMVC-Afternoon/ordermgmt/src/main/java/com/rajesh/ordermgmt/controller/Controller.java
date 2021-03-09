package com.rajesh.ordermgmt.controller;

import com.rajesh.ordermgmt.model.Order;
import com.rajesh.ordermgmt.model.OrderItem;
import com.rajesh.ordermgmt.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping({"/orders"})
public class Controller {

	@Autowired
    OrderService orderService;
	
	@PostMapping({"/createOrder"})
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        if(order.isValid()) {
            return new ResponseEntity(this.orderService.createOrder(order), HttpStatus.CREATED);
        }
        return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
    }

    @PostMapping({"/addItem/{orderId}"})
    public ResponseEntity<Order> addItemToOrder(@PathVariable(required = true, name = "orderId") int orderId, @RequestBody OrderItem item) {
        if(this.orderService.checkOrderItem(orderId) == false){
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        if(item.isValid()) {
            return new ResponseEntity(this.orderService.addItemToOrder(orderId, item), HttpStatus.CREATED);
        }
        return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping({"/orderItems/{orderId}"})
    public ResponseEntity<List<OrderItem>> getAllOrderItems(@PathVariable(required = true, name = "orderId") int orderId) {
        if(this.orderService.checkOrderItem(orderId) == false){
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(this.orderService.getOrderItems(orderId), HttpStatus.OK);
    }

    @GetMapping({"/allOrders"})
    public ResponseEntity<List<Order>> getAllOrders() {
        return new ResponseEntity(this.orderService.getAllOrders(), HttpStatus.OK);
    }

    @PutMapping({"/updateItem/{orderId}/{itemId}"})
    public ResponseEntity<OrderItem> updateItem(@PathVariable(required = true,name = "itemId") int itemId, @PathVariable(required = true,name = "orderId") int orderId, @RequestBody OrderItem item) {
        if(this.orderService.checkOrderItem(orderId) == false){
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        if(item.isValid()) {
            return new ResponseEntity(this.orderService.updateItem(itemId, orderId, item), HttpStatus.OK);
        }
        return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping({"/deleteItem/{orderId}/{itemId}"})
    public ResponseEntity<Boolean> deleteItemFromOrder(@PathVariable(required = true, name = "orderId") int orderId, @PathVariable(required = true, name = "itemId") int itemId) {
        if(this.orderService.checkOrderItem(orderId) == false){
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(this.orderService.removeItemFromOrder(orderId, itemId), HttpStatus.OK);
    }

    @DeleteMapping({"/deleteOrder/{orderId}"})
    public ResponseEntity<Boolean> deleteOrder(@PathVariable(required = true, name = "orderId") int orderId) {
        if(this.orderService.checkOrderItem(orderId) == false){
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(this.orderService.removeOrder(orderId), HttpStatus.OK);
    }
	
}