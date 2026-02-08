import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameboxComponent } from './gamebox.component';

describe('GameboxComponent', () => {
  let component: GameboxComponent;
  let fixture: ComponentFixture<GameboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameboxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
