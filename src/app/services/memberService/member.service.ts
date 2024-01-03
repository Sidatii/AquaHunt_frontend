import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Member} from "../../interfaces/Member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private _http: HttpClient) { }


  public getMembersPerCompetition(code: string): Observable<Member[]> {
    return this._http.get<any[]>(environment.API_URL + `/member/getPerCompetition/`+ code);
  }
}
