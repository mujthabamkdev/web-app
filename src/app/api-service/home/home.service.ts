import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { homeApi } from "./home.api";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) { }

    getData(params?): Observable<any> {
        return this.http.get(homeApi.dataUrl, params);
    }
}