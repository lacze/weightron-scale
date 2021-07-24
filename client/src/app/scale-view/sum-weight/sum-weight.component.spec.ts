import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumWeightComponent } from './sum-weight.component';

describe('SumWeightComponent', () => {
  let component: SumWeightComponent;
  let fixture: ComponentFixture<SumWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
