import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { HttpClientModule } from '@angular/common/http';
import { UtenteServiceService } from './services/utente-service.service';
import { BachecaComponent } from './components/bacheca/bacheca.component';

@NgModule({
  /*
   * Nelle declarations sono contenuti tutti i components
   */
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    BachecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Includo FormModules per gestire i form
    HttpClientModule, //Includo HttpClientModule per gestire le chiamate HTTP ai servizi REST
  ],
  providers: [UtenteServiceService], //Includo il service creato da me tra i providers
  bootstrap: [AppComponent]
})
export class AppModule { }
