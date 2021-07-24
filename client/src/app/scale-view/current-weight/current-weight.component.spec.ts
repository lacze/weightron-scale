import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeightComponent } from './current-weight.component';

describe('CurrentWeightComponent', () => {
  let component: CurrentWeightComponent;
  let fixture: ComponentFixture<CurrentWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
