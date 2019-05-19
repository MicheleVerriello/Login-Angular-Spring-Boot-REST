import { Component, OnInit } from '@angular/core';
import { UtenteServiceService } from 'src/app/services/utente-service.service';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/models/utente';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  utente: Utente;

  constructor(private route: ActivatedRoute, private router: Router, private utenteService: UtenteServiceService) {

    this.utente = new Utente();
   }

  ngOnInit() {
  }

  onSubmit(){
    
    this.utenteService.save(this.utente).subscribe(result => window.location.reload());//chiamo il service e salvo l' utente i cui campi sono riempiti tramite form
    //window.location.reload();
  }
}
