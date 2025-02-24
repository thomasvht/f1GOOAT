import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorStandingsComponent } from './constructor-standings.component';

describe('ConstructorStandingsComponent', () => {
  let component: ConstructorStandingsComponent;
  let fixture: ComponentFixture<ConstructorStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructorStandingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
