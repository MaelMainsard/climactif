import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        query('.modal-content', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          animate(
            '300ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' }),
          ),
        ]),
      ]),
      transition(':leave', [
        query('.modal-content', [
          animate(
            '300ms ease-in',
            style({ opacity: 0, transform: 'translateY(20px)' }),
          ),
        ]),
      ]),
    ]),
  ],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Output() modalClose = new EventEmitter<void>();

  closeModal() {
    this.modalClose.emit();
  }
}
