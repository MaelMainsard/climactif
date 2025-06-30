import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForOf } from '@angular/common';
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
    NgForOf,
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
      { name: 'Anxious', code: 'AN' },
      { name: 'Motivated', code: 'M' },
      { name: 'Tired', code: 'T' },
      { name: 'Stressed', code: 'ST' },
      { name: 'Grateful', code: 'G' },
      { name: 'Confident', code: 'CO' },
      { name: 'Lonely', code: 'L' },
      { name: 'Hopeful', code: 'H' },
      { name: 'Relaxed', code: 'R' },
      { name: 'Overwhelmed', code: 'O' },
      { name: 'Curious', code: 'CU' },
      { name: 'Bored', code: 'B' },
      { name: 'Inspired', code: 'I' },
      { name: 'Loved', code: 'LO' },
      { name: 'Frustrated', code: 'F' },
    ];
  }

  onSave() {
    this.save.emit(this.moodForm.value);
  }

  onCancel() {
    this.cancel.emit();
  }

  toggleKeyword(keyword: Keyword) {
    const selected = this.moodForm.value.keywords as Keyword[];
    if (this.isKeywordSelected(keyword)) {
      this.moodForm.patchValue({
        keywords: selected.filter((k) => k.code !== keyword.code),
      });
    } else {
      this.moodForm.patchValue({
        keywords: [...selected, keyword],
      });
    }
  }

  isKeywordSelected(keyword: Keyword): boolean {
    return (this.moodForm.value.keywords as Keyword[]).some(
      (k) => k.code === keyword.code,
    );
  }
}
