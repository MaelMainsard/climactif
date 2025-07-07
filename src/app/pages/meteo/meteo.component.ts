import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './meteo.component.html',
})
export class MeteoComponent implements OnInit {
  ngOnInit() {
    document.title = 'Météo';
  }
}
