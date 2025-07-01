import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule,RouterModule, Menubar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
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

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element != null)
      element.classList.toggle('my-app-dark');
  }
}
