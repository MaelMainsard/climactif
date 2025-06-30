import { Component } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MoodFormComponent } from '../../components/mood-form/mood-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [Dialog, ButtonModule, MoodFormComponent],
})
export class HomeComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  saveMood(moodData: any) {
    console.log('Mood data saved:', moodData);
    this.visible = false;
  }
}
