import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshTitleComponent } from './refresh-title.component';

describe('RefreshTitleComponent', () => {
  let component: RefreshTitleComponent;
  let fixture: ComponentFixture<RefreshTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefreshTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
