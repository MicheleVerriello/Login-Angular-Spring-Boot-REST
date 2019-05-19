import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';

@Injectable()
export class UtenteServiceService {

  private url: string;
  private urlTemp: string;

  constructor(private http: HttpClient) {
      this.url = 'http://localhost:8080/utente'
   }

   //passo al metodo l' utente da salvare nel database e lo passerà come body alla post sul servizio rest
   public save(utente: Utente) {

    return this.http.post<Utente>(this.url, utente);
  }

  //passo al metodo email e password che userò per comporre l' url e passarli nel path ed effettuare la chiamata al servizio rest fatto con spring
  public login(email: string, password: string){

    this.urlTemp = this.url + '/login/' + email + '/' + password;

    return this.http.get<Utente>(this.urlTemp);
  }

}
