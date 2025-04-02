import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission.model';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NgIf,
    RouterModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {
  mission?: Mission;
  isLoading = true;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.spacexService.getMissionById(+id).subscribe({
        next: (data) => {
          this.mission = data;
          this.isLoading = false;
        },
        error: () => {
          this.error = 'Could not load mission details.';
          this.isLoading = false;
        }
      });
    }
  }
}
