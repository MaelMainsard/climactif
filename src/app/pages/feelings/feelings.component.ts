import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
<<<<<<< HEAD
import { RefreshTitleComponent } from '../../components/refresh-title/refresh-title.component';
=======
import { TabsComponent } from "../../components/tabs/tabs.component";
>>>>>>> dev

@Component({
  selector: 'app-feelings',
  standalone: true,
<<<<<<< HEAD
  imports: [NavbarComponent, RefreshTitleComponent],
=======
  imports: [NavbarComponent, TabsComponent],
>>>>>>> dev
  templateUrl: './feelings.component.html',
})
export class FeelingsComponent {}
