package com.brq.camel.models;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseCovidModel {

	private ArrayList<CovidModel> data;
	
	
}
