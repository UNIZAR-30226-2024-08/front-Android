import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegConGoogleComponent } from './reg-con-google.component';

describe('RegConGoogleComponent', () => {
  let component: RegConGoogleComponent;
  let fixture: ComponentFixture<RegConGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegConGoogleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegConGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
