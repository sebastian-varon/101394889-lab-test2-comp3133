import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { RouterModule } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NgIf,
    NgFor,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MissionfilterComponent,
    RouterModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  allMissions: Mission[] = [];
  isLoading = true;
  error: string = '';

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getMissions().subscribe({
      next: (data) => {
        this.allMissions = data;
        this.missions = data;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load missions';
        this.isLoading = false;
      }
    });
  }

  getLandingStatus(mission: Mission): string {
    const cores = mission.rocket?.first_stage?.cores || [];
    const landing = cores.find((c: { land_success: boolean | null }) => c.land_success !== null);

    return landing?.land_success === true ? 'Yes' :
           landing?.land_success === false ? 'No' :
           'No Data';
  }

  filterByYear(year: string) {
    if (!year) {
      this.missions = this.allMissions;
    } else {
      this.missions = this.allMissions.filter(m => m.launch_year === year);
    }
  }
}
