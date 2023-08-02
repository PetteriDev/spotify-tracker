import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistRankingsComponent } from './artist-rankings.component';

describe('ArtistRankingsComponent', () => {
  let component: ArtistRankingsComponent;
  let fixture: ComponentFixture<ArtistRankingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistRankingsComponent]
    });
    fixture = TestBed.createComponent(ArtistRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
