import {Component, OnChanges, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, RouterModule, Menubar, ToggleSwitch, FormsModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  darkMode: boolean = false;

  items: MenuItem[] = [
    {
      label: 'Accueil',
      icon: 'pi pi-home',
      routerLink: '/partage',
    },
    {
      label: 'Sentiments',
      icon: 'pi pi-heart',
      routerLink: '/meteo',
    },
  ];

  toggleDarkMode()  {
    const element = document.querySelector('html');
    if (element != null)
      element.classList.toggle('my-app-dark');
  }
}
