import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpersalReservationComponent } from './inpersal-reservation.component';

describe('InpersalReservationComponent', () => {
  let component: InpersalReservationComponent;
  let fixture: ComponentFixture<InpersalReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InpersalReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpersalReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
