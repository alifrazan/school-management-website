import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioSubheader } from './portofolio-subheader';

describe('PortofolioSubheader', () => {
  let component: PortofolioSubheader;
  let fixture: ComponentFixture<PortofolioSubheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioSubheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofolioSubheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
