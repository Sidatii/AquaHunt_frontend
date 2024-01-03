import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Ranking} from "../../interfaces/Ranking";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private _http: HttpClient) { }


  public getRankingByCompetition(id: string): Observable<any[]> {
    return this._http.get<any[]>(environment.API_URL + `/ranking/getRanking/` + id);

  }
}
