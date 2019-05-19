import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { LoginComponent } from './components/login/login.component';
import { BachecaComponent } from './components/bacheca/bacheca.component';

//La variabile routes di tipo Routes contiene i path per il routing tra components
const routes: Routes = [
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bacheca/:email/:password', component: BachecaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
