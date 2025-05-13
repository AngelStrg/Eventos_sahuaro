import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseServiceComponent } from './base-service.component';

describe('BaseServiceComponent', () => {
  let component: BaseServiceComponent;
  let fixture: ComponentFixture<BaseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
