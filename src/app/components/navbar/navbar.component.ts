import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, Menubar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Accueil',
      icon: 'pi pi-home',
      routerLink: '/home',
    },
    {
      label: 'Sentiments',
      icon: 'pi pi-heart',
      routerLink: '/feelings',
    },
  ];

  ngOnInit() {
    console.log('Navbar coucou');
  }
}
