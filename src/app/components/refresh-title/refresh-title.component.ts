import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-refresh-title',
  imports: [],
  standalone: true,
  templateUrl: './refresh-title.component.html',
  styleUrl: './refresh-title.component.css',
})
export class RefreshTitleComponent implements AfterViewInit {
  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    const title = document.getElementById('virtual-title') as HTMLElement;
    if (title == null) return;
    const text = title.innerText.trim();
    if (text) document.title = text;
    title.focus();
  }
}
