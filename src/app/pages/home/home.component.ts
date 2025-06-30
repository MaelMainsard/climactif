import { Component, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextarea } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Keyword {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    Dialog,
    ButtonModule,
    InputTextarea,
    SelectButtonModule,
    SliderModule,
    ReactiveFormsModule,
  ],
})
export class HomeComponent implements OnInit {
  visible: boolean = false;
  moodForm!: FormGroup;
  keywords: Keyword[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.moodForm = this.fb.group({
      description: [''],
      keywords: [[]],
      color: [50],
    });

    this.keywords = [
      { name: 'Happy', code: 'HP' },
      { name: 'Sad', code: 'S' },
      { name: 'Angry', code: 'A' },
      { name: 'Excited', code: 'E' },
      { name: 'Calm', code: 'C' },
    ];
  }

  showDialog() {
    this.visible = true;
  }

  saveMood() {
    console.log(this.moodForm.value);
    this.visible = false;
  }
}
