import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { RefreshTitleComponent } from '../../components/refresh-title/refresh-title.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';

@Component({
  selector: 'app-feelings',
  standalone: true,
  imports: [NavbarComponent, TabsComponent, RefreshTitleComponent, SearchbarComponent],
  templateUrl: './feelings.component.html',
})
export class FeelingsComponent {}
