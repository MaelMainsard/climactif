import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-feelings',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './feelings.component.html',
})
export class FeelingsComponent {}
