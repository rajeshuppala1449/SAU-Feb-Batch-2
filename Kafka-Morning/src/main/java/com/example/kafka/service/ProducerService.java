package com.example.kafka.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

import com.example.kafka.models.Order;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class ProducerService {

	 @Autowired
	    private KafkaTemplate<String, String> createOrShipKafkaTemplate;

	    public void createOrder(Order order) {
	        String topicName = "create-order";
	        createOrShipKafkaTemplate.send(topicName, order.toString());
	        log.info("########## Kafka Order Produced(Created) by Producer, msg = {}", order.toString());
	    }

	    public void shipOrder(Order order) {
	        String topicName = "ship-order";
	        createOrShipKafkaTemplate.send(topicName, order.toString());
	        log.info("########## Kafka Order Shipped by Producer , msg = {}", order.toString());
	    }

}
