import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicDialogModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
