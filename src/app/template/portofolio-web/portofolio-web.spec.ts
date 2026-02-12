import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioWeb } from './portofolio-web';

describe('PortofolioWeb', () => {
  let component: PortofolioWeb;
  let fixture: ComponentFixture<PortofolioWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofolioWeb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
