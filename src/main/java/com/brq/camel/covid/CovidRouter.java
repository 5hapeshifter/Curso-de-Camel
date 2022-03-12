package com.brq.camel.covid;

import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;

@Component
public class CovidRouter extends RouteBuilder{

	@Override // 
	public void configure() throws Exception {
				
		
		from("timer:covid?period=1000000")//aqui a cada 10000 segundos é disparado uma requisição para o endereço abaixo, o nome do nosso timer é covid "timer:covid?"
		.to("https://covid19-brazil-api.vercel.app/api/report/v1")
		.process(new CovidProcessor())
		.log("${body}");

		
	}
}
