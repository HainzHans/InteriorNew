import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPointsSection } from './grid-points-section';

describe('GridPointsSection', () => {
  let component: GridPointsSection;
  let fixture: ComponentFixture<GridPointsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridPointsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPointsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
