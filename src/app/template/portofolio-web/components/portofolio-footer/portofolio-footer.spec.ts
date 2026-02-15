import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioFooter } from './portofolio-footer';

describe('PortofolioFooter', () => {
  let component: PortofolioFooter;
  let fixture: ComponentFixture<PortofolioFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofolioFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
