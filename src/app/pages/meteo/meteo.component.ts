import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [TabsComponent, SearchbarComponent],
  templateUrl: './meteo.component.html',
})
export class MeteoComponent implements OnInit {
  ngOnInit() {
    document.title = 'Météo';
  }
}
