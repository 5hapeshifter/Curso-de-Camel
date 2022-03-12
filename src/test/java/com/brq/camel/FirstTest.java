package com.brq.camel;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;//anotação usada em cima dos métodos para fazer teste

public class FirstTest {
	//todo teste é um método
	@Test
	public void firstTest() {
		
		int sum = 5 + 2;
		int expected = 7;
		
		assertEquals(expected, sum);// o 'assertEquals' faz a verificação do que inserirmos como expected comparando com o resultado do que inserirmos no segundo parâmetro
	}
	@Test
	public void firstIfExpectedGreatherThanSumTest() {
		int sum = 5 + 3;
		int expected = 7;
		
		assertTrue(expected > sum);
	}
	@Test
	public void firstIfExpectedLessThanSumTest() {
		int sum = 5 + 3;
		int expected = 7;
		
		assertTrue(expected < sum);
	}
}
