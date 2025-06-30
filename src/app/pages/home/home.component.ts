import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {}
