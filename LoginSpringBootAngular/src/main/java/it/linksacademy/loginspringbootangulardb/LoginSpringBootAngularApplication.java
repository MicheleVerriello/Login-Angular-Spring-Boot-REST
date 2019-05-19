package it.linksacademy.loginspringbootangulardb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories //Abilito JpaRepositories per effettuare le operazioni CRUD tramite l' interfaccia UtenteRepository
public class LoginSpringBootAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginSpringBootAngularApplication.class, args);
	}

}
