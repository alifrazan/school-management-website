import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioHeader } from './portofolio-header';

describe('PortofolioHeader', () => {
  let component: PortofolioHeader;
  let fixture: ComponentFixture<PortofolioHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofolioHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
