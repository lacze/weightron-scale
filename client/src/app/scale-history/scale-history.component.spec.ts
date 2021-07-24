import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleHistoryComponent } from './scale-history.component';

describe('ScaleHistoryComponent', () => {
  let component: ScaleHistoryComponent;
  let fixture: ComponentFixture<ScaleHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
