package com.brq.camel.goRest;

import java.util.ArrayList;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;
import org.springframework.http.HttpEntity;
import org.springframework.web.client.RestTemplate;

import com.brq.camel.models.ResponseGoRestModel;
import com.brq.camel.models.goRestModel;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j // responsável por fazer a impressão dos dados de forma completa no log do servidor
public class goRestProcessor implements Processor{

	@Override
	public void process(Exchange exchange) throws Exception {
		String input = exchange.getIn().getBody(String.class);
		System.out.println("GoRestProcessor " + input);
		
		ObjectMapper objectMapper = new ObjectMapper(); // o Mapper vai fazer a conversão dos dados de entrada em um objeto
		ResponseGoRestModel responseGoRestModel = objectMapper.readValue(input, ResponseGoRestModel.class); //
		log.info(responseGoRestModel.toString()); //
		
		RestTemplate restTemplate = new RestTemplate(); // mecanismo para disparar as requisições enviando o Json para a API
		   
		ArrayList<goRestModel> arrayUsuario = responseGoRestModel.getData(); 
		
		for (goRestModel usuario : arrayUsuario) {
			HttpEntity<goRestModel> request = new HttpEntity<goRestModel>(usuario); // O HttpEntity converte o objeto para um Json
			restTemplate.postForObject("http://localhost:8080/usuarios", request, ResponseGoRestModel.class); // aqui estamos enviando a requisição pelo "postForObject" com o objeto que convertemos para Json "request" e o tipo do objeto, nesse caso a Classe do objeto
		}
	}
	

}
