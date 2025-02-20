import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P10RankingComponent } from './p10-ranking.component';

describe('P10RankingComponent', () => {
  let component: P10RankingComponent;
  let fixture: ComponentFixture<P10RankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P10RankingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P10RankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
