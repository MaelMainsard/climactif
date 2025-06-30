import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MoodFormComponent } from '../../components/mood-form/mood-form.component';
import { Button, ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
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
