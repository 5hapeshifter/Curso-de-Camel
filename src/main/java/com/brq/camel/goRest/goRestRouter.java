package com.brq.camel.goRest;

import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;

@Component // Com essa anotação que o Spring faz instanciação dele automaticamente e toda configuração
public class goRestRouter extends RouteBuilder {

	@Override
	public void configure() throws Exception {

		from("timer:goRest?period=1000000")
		.to("https://gorest.co.in/public/v1/users")
		.process(new goRestProcessor())
		.log("${body}");
	}

}
