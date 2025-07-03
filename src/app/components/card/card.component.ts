import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  imports: [CardModule, CommonModule],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() header!: string;
  @Input() title!: string;
  @Input() text!: string;
  @Input() layout: 'horizontal' | 'vertical' = 'vertical';
}
