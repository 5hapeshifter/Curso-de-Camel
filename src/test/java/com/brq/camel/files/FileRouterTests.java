package com.brq.camel.files;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.File;

import org.apache.camel.test.junit5.CamelTestSupport;
import org.junit.jupiter.api.Test;

public class FileRouterTests extends CamelTestSupport{
	
	private FileRouter fileRouter = null;
	
	protected FileRouter createRouteBuilder() throws Exception {
		
		if(fileRouter == null) {
			this.fileRouter = new FileRouter();
		}
		
		return this.fileRouter;
		// return new FileRouter(); 
	}
	@Test
	public void checkIfFileExistsInOutputDirectory() {
		
		File file = new File("files/output");
		assertTrue(file.isDirectory());// verifica se é um diretório
		assertTrue(file.listFiles().length > 0);// verifica se há arquivos no diretório
		
	}
}
