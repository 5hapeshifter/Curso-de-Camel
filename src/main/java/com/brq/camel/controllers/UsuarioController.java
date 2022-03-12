package com.brq.camel.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; // 

import com.brq.camel.models.UsuarioModel;

@RestController
@RequestMapping(value = "usuarios")
public class UsuarioController {
	
	private ArrayList<UsuarioModel> usuarios = new ArrayList<>();
	
	public UsuarioController() {// sempre que esse construtor é chamado, o método adicionarUsuarios é chamado
		this.adicionarUsuarios();
	}
	
	@GetMapping//(value = "usuarios") aqui tiramos o 'value' pq estabelecemos o caminho na classe
	public ArrayList<UsuarioModel> getAll() {// retorna o todos os usuários
					
		return this.usuarios;
		
//		System.out.println("Rota de usuários");
//		return "Rota de usuários";
	}
	
	@GetMapping( value="{id}")
	public UsuarioModel getOne(@PathVariable("id") int id){	// o '@PathVariable' informa que o 'id' do '@GetMapping' será o dado recebido e transferido para o 'id' do método
		UsuarioModel usuario = new UsuarioModel();
		for (int i = 0; i < this.usuarios.size(); i++) {
			if (id == this.usuarios.get(i).getId()) {
				usuario = this.usuarios.get(i);
			}
		}
		return usuario;
	}
	
	private void adicionarUsuarios() {// método criado para instanciar e adicionar o usuário no ArrayList
		
		UsuarioModel usuario = new UsuarioModel(1, "Meu Nome", "abc@abc.com");// o próprio Spring boot transforma o objeto em um Json	
//		this.usuarios.add(usuario);
//		UsuarioModel usuario2 = new UsuarioModel(1, "Meu Nome", "abc@abc.com");	
//		this.usuarios.add(usuario);
		
		for(int i = 0; i < 10; i++) {
			usuario = new UsuarioModel(i, "Usuario " + i, "usuario" + i + "@abc.com");
			usuarios.add(usuario);
		}
		
	}
	
	@DeleteMapping(value="{id}")
	public void delete(@PathVariable("id") int id) {
		for (int i = 0; i < this.usuarios.size(); i++) {
			if (id == this.usuarios.get(i).getId()) {
				usuarios.remove(usuarios.get(i));
			}
		}
	}

	@PostMapping
	public UsuarioModel save( @RequestBody UsuarioModel usuario ){ //Nessa anotação '@RequestBody' ele faz a conversão dos dados recebidos em Json para um 'objeto' que podemos adicionar ao array, desde que OS ATRIBUTOS DO JSON SEJAM IDÊNTICOS AOS DO ARRAY.
		this.usuarios.add(usuario);
		System.out.println(usuario.getEmail());
		return usuario;
	}
	
	@PatchMapping (value = "{id}")
	public UsuarioModel update ( 
			@RequestBody UsuarioModel usuario,
			@PathVariable("id") int id) {
		
		for (int i = 0; i < this.usuarios.size(); i++) {
			if (id == this.usuarios.get(i).getId()) {
				this.usuarios.get(i).setEmail( usuario .getEmail() );
				this.usuarios.get(i).setNome( usuario .getNome() );
			}
		}
		return usuario;
		
	}
	
}
