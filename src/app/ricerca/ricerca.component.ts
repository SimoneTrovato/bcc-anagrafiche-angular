import { FilialiService } from './../_services/filiali.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientiService } from '../_services/clienti.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {
  @Output() redirect:EventEmitter<any> = new EventEmitter();
customerName;
branch;
nag;
birthDate;
filiali;
clienti;
p:number;
  constructor(filialiService: FilialiService, private clientiService: ClientiService) { 

 /* service.getFiliali().forEach((response) => { console.log(response)
let filiali = response
 console.log(filiali[3])
});
*/
filialiService.getFiliali().subscribe(response => {
  
  console.log(response)
  this.filiali = ( response);
  console.log(this.filiali)
}
  );
  }
  ngOnInit() {
    this.customerName = "";
   this.branch = "";
   this.nag = "";
   this.birthDate = "";
 
  }
  cerca() {
    console.log(this.customerName);
    console.log(this.nag);
    console.log(this.branch);
    console.log(this.birthDate.toString().replace("-", "/").replace("-", "/"));
    this.clientiService.getClienti( this.customerName,
    this.branch,
    this.nag,
    this.birthDate.toString().replace("-", "/").replace("-", "/"))
    .subscribe(response => {
  
      console.log(response)
      this.clienti = ( response);
      console.log(this.clienti)
      this.redirect.emit(this.clienti);
      this.p=1;
    }
      )
  }

  OttieniClienti(){
    return this.clienti;
  }
  
  }
