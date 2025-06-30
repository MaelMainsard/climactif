import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';

interface Keyword {
  name: string;
  code: string;
}

@Component({
  selector: 'app-mood-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    SelectButtonModule,
    SliderModule,
  ],
  templateUrl: './mood-form.component.html',
  styleUrl: './mood-form.component.css',
})
export class MoodFormComponent implements OnInit {
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  moodForm!: FormGroup;
  keywords: Keyword[] = [];
  value!: string;

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

  onSave() {
    this.save.emit(this.moodForm.value);
  }

  onCancel() {
    this.cancel.emit();
  }
}
