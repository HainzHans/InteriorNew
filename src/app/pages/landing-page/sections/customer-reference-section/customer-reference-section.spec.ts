import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReferenceSection } from './customer-reference-section';

describe('CustomerReferenceSection', () => {
  let component: CustomerReferenceSection;
  let fixture: ComponentFixture<CustomerReferenceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerReferenceSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerReferenceSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
