import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TabsComponent } from "../../components/tabs/tabs.component";

@Component({
  selector: 'app-feelings',
  standalone: true,
  imports: [NavbarComponent, TabsComponent],
  templateUrl: './feelings.component.html',
})
export class FeelingsComponent {}
