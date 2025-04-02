import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiURL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiURL);
  }

  getMissionById(id: number): Observable<Mission> {
    return this.http.get<Mission>(`https://api.spacexdata.com/v3/launches/${id}`);
  }  
}