import { Component } from '@angular/core';
import { TabsComponent } from "../../components/tabs/tabs.component";

@Component({
  selector: 'app-feelings',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './feelings.component.html',
})
export class FeelingsComponent {}
