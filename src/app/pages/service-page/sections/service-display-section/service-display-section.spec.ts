import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDisplaySection } from './service-display-section';

describe('ServiceDisplaySection', () => {
  let component: ServiceDisplaySection;
  let fixture: ComponentFixture<ServiceDisplaySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDisplaySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDisplaySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
