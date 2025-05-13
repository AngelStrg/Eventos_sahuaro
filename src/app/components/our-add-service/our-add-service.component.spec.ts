import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAddServiceComponent } from './our-add-service.component';

describe('OurAddServiceComponent', () => {
  let component: OurAddServiceComponent;
  let fixture: ComponentFixture<OurAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurAddServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
