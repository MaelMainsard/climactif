import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { RefreshTitleComponent } from '../../components/refresh-title/refresh-title.component';

@Component({
  selector: 'app-feelings',
  standalone: true,
  imports: [
    // NavbarComponent,
    TabsComponent,
    // RefreshTitleComponent,
  ],
  templateUrl: './feelings.component.html',
})
export class FeelingsComponent implements OnInit {
  ngOnInit() {
    document.title = 'Sentiments';
  }
}
