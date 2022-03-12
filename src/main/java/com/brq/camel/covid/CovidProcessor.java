package com.brq.camel.covid;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import com.brq.camel.models.ResponseCovidModel;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CovidProcessor implements Processor{

	@Override
	public void process(Exchange exchange) throws Exception {
		String input = exchange.getIn().getBody(String.class);
		System.out.println(input);
		
		ObjectMapper objectMapper = new ObjectMapper();// pega uma entrada e converte para um objeto usando a classe que a gente informar como modelo
		ResponseCovidModel responseCovidModel = objectMapper.readValue(input, ResponseCovidModel.class);
		
		System.out.println(responseCovidModel.toString());
	}

}
