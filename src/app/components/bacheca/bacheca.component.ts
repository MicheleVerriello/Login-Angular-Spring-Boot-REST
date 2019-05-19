import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtenteServiceService } from 'src/app/services/utente-service.service';
import { Utente } from 'src/app/models/utente';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css']
})
export class BachecaComponent implements OnInit {

   private email: string;
   private password: string;
   private utente: Utente;

  constructor(private route: ActivatedRoute, private router: Router, private utenteService: UtenteServiceService) {
    this.utente = new Utente();
  }

  /* Dopo aver inserito email e password e aver cliccato submit, 
   * Ci apparirà la bacheca dell' utente di cui abbiamo fatto il login,
   * se email e password sono errate la pagina sarà bianca
   */
  ngOnInit() {
    this.route.params.subscribe((params) =>this.email=params.email); //Assegno al valore email dichiarato all' inizio l' email ricevuta nel path
    this.route.params.subscribe((params) =>this.password=params.password); //Assegno al valore password dichiarato all' inizio la password ricevuta nel path

    this.utenteService.login(this.email, this.password).subscribe(data => this.utente = data); //Chiamo il service che tramite email e password mi restituirà l' utente
  }

}
