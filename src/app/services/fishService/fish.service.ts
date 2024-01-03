import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private _http: HttpClient) { }

public getFish(size: number | null, page: number | null): Observable<any[]> {
    return this._http.get<any[]>(environment.API_URL + `/fish/readAll` + `?size=` + (size == null ? 6 : size) + `&page=` + (page == null ? 0 : page));
  }

}
