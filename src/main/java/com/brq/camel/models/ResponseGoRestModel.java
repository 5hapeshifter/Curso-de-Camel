package com.brq.camel.models;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseGoRestModel {
	
	private ArrayList<goRestModel> data;
	private MetaGoRestModel meta;
}
