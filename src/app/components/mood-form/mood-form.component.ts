import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import ClimactifPreset, { createColorScheme } from '../../resources/app_preset';
import chroma from 'chroma-js';

interface Keyword {
  name: string;
  code: string;
}

@Component({
  selector: 'app-mood-form',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule, ButtonModule, SelectButtonModule, SliderModule],
  templateUrl: './mood-form.component.html',
  styleUrl: './mood-form.component.css',
})
export class MoodFormComponent implements OnInit {
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  moodForm!: FormGroup;
  keywords: Keyword[] = [];
  value!: string;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.moodForm = this.fb.group({
      description: ['', Validators.required],
      keywords: [[], Validators.required],
      color: [50],
    });

    this.keywords = [
      { name: 'Joyeux', code: 'HP' },
      { name: 'Triste', code: 'S' },
      { name: 'Énervé', code: 'A' },
      { name: 'Surexcité', code: 'E' },
      { name: 'Calme', code: 'C' },
      { name: 'Stressé', code: 'AN' },
      { name: 'Motivé', code: 'M' },
      { name: 'Fatigué', code: 'T' },
      { name: 'Reconnaissant', code: 'G' },
      { name: 'Confiant', code: 'CO' },
      { name: 'Seul', code: 'L' },
      { name: 'Optimiste', code: 'H' },
      { name: 'Relaxé', code: 'R' },
      { name: 'Accablé', code: 'O' },
      { name: 'Curieux', code: 'CU' },
      { name: 'Ennuyé', code: 'B' },
      { name: 'Inspiré', code: 'I' },
      { name: 'Aimé', code: 'LO' },
      { name: 'Frustré', code: 'F' },
    ];

    this.onColorChanged(50);
  }

  onSave() {
    this.submitted = true;
    this.moodForm.markAllAsTouched();
    if (this.moodForm.valid) {
      this.save.emit(this.moodForm.value);
    }
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
    return (this.moodForm.value.keywords as Keyword[]).some((k) => k.code === keyword.code);
  }

  onColorChanged(color: number | undefined) {
    if (color == undefined) return;

    const primary = chroma('#880000')
      .set('hsl.h', color * 3.6)
      .hex();
    const dialogTheme = createColorScheme(primary);
    const style = document.createElement('style');
    style.textContent = `
      .mood-form {
        --p-primary-color: ${dialogTheme.primary.color};
        --p-primary-inverse-color: ${dialogTheme.primary.inverseColor};
        --p-primary-focus-color: ${dialogTheme.primary.focusColor};
        --p-primary-hover-color: ${dialogTheme.primary.hoverColor};
        --p-primary-active-color: ${dialogTheme.primary.activeColor};
        --p-surface-ground: ${dialogTheme.surface.ground};
        --p-surface-card: ${dialogTheme.surface.card};
        --p-surface-on: ${dialogTheme.surface.on};
      }
    `;
    document.head.appendChild(style);
  }
}
