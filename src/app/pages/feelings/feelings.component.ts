import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RefreshTitleComponent } from '../../components/refresh-title/refresh-title.component';

@Component({
  selector: 'app-feelings',
  standalone: true,
  imports: [NavbarComponent, RefreshTitleComponent],
  templateUrl: './feelings.component.html',
})
export class FeelingsComponent {}
