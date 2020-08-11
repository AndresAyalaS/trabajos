import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  currentUser: any;
  ngOnInit() {
    this.currentUser = localStorage.getItem('user')
  }

  logout() {
    localStorage.removeItem('user')
    this.router.navigate(['login']);
  }

}
