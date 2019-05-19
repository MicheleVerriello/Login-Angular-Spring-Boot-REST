import { Component, OnInit } from '@angular/core';
import { UtenteServiceService } from 'src/app/services/utente-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    
  }
}
