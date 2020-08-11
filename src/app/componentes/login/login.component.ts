import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser: any;
  constructor(
    private router: Router
  ) {

  }


  usuario: string;
  password: string;
  ngOnInit() {
  }


  login(): void {
    if (this.usuario === 'admin' && this.password === 'admin') {
      localStorage.setItem('user', 'user');
      this.router.navigate(['equipos/listar']);
    } else {
      alert('Usuario y contraseña invalido');
    }
  }
}

