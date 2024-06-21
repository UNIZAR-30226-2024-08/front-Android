import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerMultiplayerComponent } from './poker-multiplayer.component';

describe('PokerMultiplayerComponent', () => {
  let component: PokerMultiplayerComponent;
  let fixture: ComponentFixture<PokerMultiplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokerMultiplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokerMultiplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
