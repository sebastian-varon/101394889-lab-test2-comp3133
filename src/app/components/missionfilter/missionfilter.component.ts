import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.scss']
})
export class MissionfilterComponent implements OnInit {
  @Output() yearSelected = new EventEmitter<string>();
  years: string[] = [];

  ngOnInit(): void {
    const startYear = 2006;
    const endYear = new Date().getFullYear();
    for (let y = startYear; y <= endYear; y++) {
      this.years.push(String(y));
    }
  }

  selectYear(year: string) {
    this.yearSelected.emit(year);
  }
}
