import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodFormComponent } from './mood-form.component';

describe('MoodFormComponent', () => {
  let component: MoodFormComponent;
  let fixture: ComponentFixture<MoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
