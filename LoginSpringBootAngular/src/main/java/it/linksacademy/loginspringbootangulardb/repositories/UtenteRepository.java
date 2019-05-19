package it.linksacademy.loginspringbootangulardb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import it.linksacademy.loginspringbootangulardb.models.Utente;

/*
 * @Repository è un' annotation più specifica di component che indica che l' interfaccia è una repository
 */
@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {

	/*
	 * il metodo 'findUtenteByEmailAndPassword' genera automaticamente una query sul database che restituisce un utente in base all' email e alla password
	 */
	Utente findUtenteByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
