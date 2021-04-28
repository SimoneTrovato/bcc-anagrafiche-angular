import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "src/environments/environment";
import {HttpClient} from "@angular/common/http";;
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FilialiService {
  url = environment.baseUrl;

  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) { }

  getFiliali(){
   // return ["filiale1","filiale2"]
   let url = this.url + "/api/v1/branch-search";
   return this.http.get(url, {
    headers: {
      "Content-type": "application/json",
    }
  })
  }
}

