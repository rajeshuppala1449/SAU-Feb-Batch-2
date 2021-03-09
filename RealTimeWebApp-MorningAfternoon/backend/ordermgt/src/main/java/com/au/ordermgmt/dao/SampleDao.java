package com.au.ordermgmt.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class SampleDao {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public String getProductName(Integer id) {
		return jdbcTemplate.queryForObject("select * from payment where id = ?",String.class,id);
	}
	
	public int getId(Integer id) {
		return jdbcTemplate.queryForObject("select id from payment where id = ?",Integer.class,id);
	}
	
	public String getName(Integer id) {
		return jdbcTemplate.queryForObject("select name from payment where id = ?",String.class,id);
	}
	
	public int getCredits(Integer id) {
		return jdbcTemplate.queryForObject("select credits from payment where id = ?",Integer.class,id);
	}
	
	public void setCredits(int id,int cost) {
		int previous_credits = getCredits(id);
		int new_credits = previous_credits - cost;
		System.out.println(new_credits);
		jdbcTemplate.update("update payment set credits=? where id=1",new_credits);
	}
}