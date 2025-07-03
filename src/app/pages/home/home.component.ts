import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RefreshTitleComponent } from '../../components/refresh-title/refresh-title.component';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MoodFormComponent } from '../../components/mood-form/mood-form.component';

@Component({
  selector: 'app-home',
  imports: [Dialog, ButtonModule, MoodFormComponent, RefreshTitleComponent],
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  visible: boolean = false;

  ngOnInit() {
    // document.title = 'Partage';
  }

  showDialog() {
    this.visible = true;
  }

  saveMood(moodData: any) {
    console.log('Mood data saved:', moodData);
    this.visible = false;
  }

  onDialogHide() {
    const myElement = document.getElementById('openDialogBtn');
    if (!myElement) return;
    for (const child of myElement.children) {
      if (child instanceof HTMLButtonElement) child.focus();
    }
  }
}
