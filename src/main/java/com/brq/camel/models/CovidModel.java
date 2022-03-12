package com.brq.camel.models;

import java.util.Date;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // gera todos getters and setters automaticamente
@AllArgsConstructor // 
@NoArgsConstructor // 
public class CovidModel {

	private int uid;
	private String uf;
	private String state;
	private int cases;
	private int deaths;
	private int suspects;
	private int refuses;
	private Date datetime;
		
}
