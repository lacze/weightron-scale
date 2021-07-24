import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleViewButtonsComponent } from './scale-view-buttons.component';

describe('ScaleViewButtonsComponent', () => {
  let component: ScaleViewButtonsComponent;
  let fixture: ComponentFixture<ScaleViewButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleViewButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleViewButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
