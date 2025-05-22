import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { InpersonReservationComponent } from './inperson-reservation.component';

describe('InpersonReservationComponent', () => {
  let component: InpersonReservationComponent;
  let fixture: ComponentFixture<InpersonReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpersonReservationComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpersonReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
