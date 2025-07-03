import { Component } from '@angular/core';

@Component({
  selector: 'app-refresh-title',
  imports: [],
  standalone: true,
  templateUrl: './refresh-title.component.html',
  styleUrl: './refresh-title.component.css',
})
export class RefreshTitleComponent {
  title!: string;

  ngOnInit() {
    const title = document.getElementById('virtual-title');

    // console.log('Title refreshed:', document.title);

    if (title) {
      title?.focus();
      console.log('test :', title != undefined);
      document.title = title.textContent || 'Climactif';
    }

    // const goMain = document.getElementById('skip-to-main-content');
    // goMain?.focus();

    // console.log('go main :', goMain != undefined);
  }
}
