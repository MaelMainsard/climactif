import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RefreshTitleComponent } from '../../components/refresh-title/refresh-title.component';

@Component({
  selector: 'app-home',
  imports: [RefreshTitleComponent],
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    document.title = 'Accueil';
  }
}
