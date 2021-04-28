import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  url = environment.baseUrl;

  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router) { }

getClienti(  customerName: string,
  branch: number,
  nag: string,
  birthDate: string){
  let url = this.url + "/api/v1/customer-search"+ 
  "?branch=" + branch +
  "&nag=" + nag;

  if (customerName !== "") {
    url += "&customerName=" + customerName;
    if (
      birthDate !== "" &&
      birthDate !== "undefined" &&
      birthDate.length === 10
    ) {
      url += "&birthDate=" + birthDate;
    }
    
  } 
  console.log(url);
  return this.http.get(url, {
    headers: {
      
      "Content-type": "application/json",
    }
  })
  
}
customerMarkAsEdited(campi) {
  let url = this.url + "/api/v1/customer-mark-as-edited";
  const post = {};
 // campi.map((campo) => (post[campo.value] = campo.isChecked));
console.log(campi);
  return this.http.post(url, campi, {
    headers: {
      "Content-type": "application/json",
    },
    responseType: "text",
  });
}
}
