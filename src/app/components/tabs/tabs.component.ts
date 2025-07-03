import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-tabs',
  imports: [TabsModule, CardComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

}
