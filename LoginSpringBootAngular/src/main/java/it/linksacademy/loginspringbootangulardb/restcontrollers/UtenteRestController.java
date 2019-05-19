package it.linksacademy.loginspringbootangulardb.restcontrollers;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.linksacademy.loginspringbootangulardb.models.Utente;
import it.linksacademy.loginspringbootangulardb.repositories.UtenteRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UtenteRestController {

	/*
	 * Dependency Injection con la repositoy utilizzando @Autowired
	 */
	@Autowired
	UtenteRepository utenteRepository;
	
	/*
	 * @Transactional rende il metodo una transazione (se va a buon fine si conclude con una COMMIT, altrimenti con una ROLLBACK)
	 * @PostMapping effettua una POST sul database
	 * Il metodo permette il salvataggio dell' utente
	 */
	@Transactional
	@PostMapping("/utente")
	public void newUser(@RequestBody Utente utente){
		
		utenteRepository.save(utente);
	}
	
	/*
	 * @Transactional rende il metodo una transazione (se va a buon fine si conclude con una COMMIT, altrimenti con una ROLLBACK)
	 * @GetMapping effettua una GET sul database, quindi riceverà un valore o una lista di valori
	 * Il metodo restituisce l' utente con l' email e la password inserite
	 */
	@Transactional
	@GetMapping("/utente/login/{email}/{password}")
	public Utente loggedIn(@PathVariable String email, @PathVariable String password){
		
			return utenteRepository.findUtenteByEmailAndPassword(email, password);
	}
}
