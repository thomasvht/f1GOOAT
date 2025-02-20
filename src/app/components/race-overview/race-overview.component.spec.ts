import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceOverviewComponent } from './race-overview.component';

describe('RaceOverviewComponent', () => {
  let component: RaceOverviewComponent;
  let fixture: ComponentFixture<RaceOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
