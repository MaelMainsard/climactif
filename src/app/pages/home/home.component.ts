import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RefreshTitleComponent } from '../../components/refresh-title/refresh-title.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MoodFormComponent } from '../../components/mood-form/mood-form.component';
import { Button, ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RefreshTitleComponent, ButtonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  openModal() {
    this.ref = this.dialogService.open(MoodFormComponent, {
      header: 'Select a Mood',
      width: '70%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }
}
