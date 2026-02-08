import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homeitems } from './homeitems';

describe('Homeitems', () => {
  let component: Homeitems;
  let fixture: ComponentFixture<Homeitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homeitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homeitems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
