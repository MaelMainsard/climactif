import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'dialog-basic-demo',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [Dialog, ButtonModule, InputTextModule],
})
export class HomeComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
