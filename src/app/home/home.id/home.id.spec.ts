import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeId } from './home.id';

describe('HomeId', () => {
  let component: HomeId;
  let fixture: ComponentFixture<HomeId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeId);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
