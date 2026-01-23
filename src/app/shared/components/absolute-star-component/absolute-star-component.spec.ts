import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsoluteStarComponent } from './absolute-star-component';

describe('AbsoluteStarComponent', () => {
  let component: AbsoluteStarComponent;
  let fixture: ComponentFixture<AbsoluteStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsoluteStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsoluteStarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
