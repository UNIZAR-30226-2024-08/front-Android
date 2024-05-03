import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BjMultiplayerComponent } from './bj-multiplayer.component';

describe('BjMultiplayerComponent', () => {
  let component: BjMultiplayerComponent;
  let fixture: ComponentFixture<BjMultiplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BjMultiplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BjMultiplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
