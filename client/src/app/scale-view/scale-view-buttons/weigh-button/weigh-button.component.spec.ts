import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighButtonComponent } from './weigh-button.component';

describe('WeighButtonComponent', () => {
  let component: WeighButtonComponent;
  let fixture: ComponentFixture<WeighButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeighButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeighButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
