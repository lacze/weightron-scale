import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleViewComponent } from './scale-view.component';

describe('ScaleViewComponent', () => {
  let component: ScaleViewComponent;
  let fixture: ComponentFixture<ScaleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
