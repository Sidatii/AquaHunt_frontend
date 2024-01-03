import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Competition} from "../../interfaces/Compettition";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private _http: HttpClient) { }

  public UpdateCompetition(data: Competition): Observable<Competition> {
    return this._http.patch<Competition>(environment.API_URL + `/competition/update/${data.code}`, data);
  }

  public DeleteCompetition(id: number): Observable<any> {
    return this._http.delete(environment.API_URL + `/competition/${id}`);
  }

  public AddCompetition(data: any): Observable<Competition> {
    const competition: Competition = {
      code: data.code,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      location: data.location,
      description: data.description,
      maxParticipants: data.maxParticipants,
      participationFee: data.participationFee
    };
    return this._http.post<Competition>(environment.API_URL + `/competition/create`, competition);
  }

  public GetCompetitions(): Observable<Competition[]> {
    return this._http.get<Competition[]>(environment.API_URL + `/competition/readAll`);
  }
}
