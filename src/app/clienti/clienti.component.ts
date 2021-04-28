import { MatPaginator, MatPaginatorModule } from '@angular/material';
import { ModaleComponent } from './../modale/modale.component';
import { Component, OnInit, Input, Output, EventEmitter, NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',   

  styleUrls: ['./clienti.component.css']
})
@NgModule({
  imports: [CommonModule],
  declarations: [Component]

})
export class ClientiComponent implements OnInit {

@ViewChild(MatPaginator) paginator: MatPaginator;
@Input("p") p:number
  @Input("clienti") clienti: any
  @Output() redirect:EventEmitter<any> = new EventEmitter();
modaleAperta: boolean;
clientiModaleParent: any;
modaleConferma: boolean;
clienteP: any




  constructor( private modalService: NgbModal) {}

  ngOnInit() {    
    this.paginator= this.paginator;

  }


  

  annulla(){
    console.log("annulla")
    this.modaleAperta= !this.modaleAperta;
    
    console.log(this.modaleAperta)
  }
  apriModale(cliente){
    console.log("APERTA MODALE" +cliente.nome)
    this.clientiModaleParent = cliente;
console.log(this.clientiModaleParent)
     this.modaleAperta=!this.modaleAperta;
     console.log(this.modaleAperta)
   
  }

  conferma(){
    console.log("conferma");
    this.modaleConferma= !this.modaleConferma;
    const modalRef = this.modalService.open(ClientiComponent);
    modalRef.componentInstance.name = 'World';
  }

    openModal( cliente) {
      this.clienteP=cliente;

    const modalRef = this.modalService.open(ModaleComponent, {windowClass: 'custom-class'});
    modalRef.componentInstance.clientiModale = cliente;
   // modalRef.componentInstance.handleConfirmed = this.handleConfirmed; 
   // modalRef.componentInstance.modalSuccess = this.modalSuccess;
     
    }
 
}
