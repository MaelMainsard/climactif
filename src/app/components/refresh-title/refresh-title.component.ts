import { Component } from '@angular/core';

@Component({
  selector: 'app-refresh-title',
  imports: [],
  standalone: true,
  templateUrl: './refresh-title.component.html'
})
export class RefreshTitleComponent {
  title!: string;

  ngOnChange() {
    const title = document.getElementById('virtual-title');
    if (title) {
      title.textContent = document.title;
      title.focus();
    }
  }
}
