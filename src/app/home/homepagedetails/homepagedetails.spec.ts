import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepagedetails } from './homepagedetails';

describe('Homepagedetails', () => {
  let component: Homepagedetails;
  let fixture: ComponentFixture<Homepagedetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepagedetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepagedetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
