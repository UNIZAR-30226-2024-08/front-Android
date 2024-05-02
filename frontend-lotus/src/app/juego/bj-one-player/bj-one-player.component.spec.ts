import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BjOnePlayerComponent } from './bj-one-player.component';

describe('BjOnePlayerComponent', () => {
  let component: BjOnePlayerComponent;
  let fixture: ComponentFixture<BjOnePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BjOnePlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BjOnePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
