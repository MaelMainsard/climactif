import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
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
  ngOnInit() {
    document.title = 'Accueil';
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  saveMood(moodData: any) {
    console.log('Mood data saved:', moodData);
    this.visible = false;
  }
}
