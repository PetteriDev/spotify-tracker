import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist-rankings',
  templateUrl: './artist-rankings.component.html',
  styleUrls: ['./artist-rankings.component.css']
})
export class ArtistRankingsComponent implements OnInit {
  rankings: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('/api/artists').subscribe((data) => {
      this.rankings = data;
    });
  }
}