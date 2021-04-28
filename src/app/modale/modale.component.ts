import { ClientiService } from './../_services/clienti.service';
import { Component, OnInit, Input, NgModule, TemplateRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
@NgModule({
  imports: [BrowserModule ]
})
export class ModaleComponent implements OnInit {
 
  @Input("modaleAperta") modaleAperta: any

  @Input("clientiModale") clientiModale: any

 //@Input("clientiModaleParent") public clientiModale: any
  title: string;
  closeBtnName: string;
  list: any[] = [];
 modaleChiusa: boolean;
  form: FormGroup;
  conferma: boolean;
  apri: boolean;
   
    campi = [
      { id: 1, value: "email", isChecked: false },
      { id: 2, value: "telefono", isChecked: false },
      { id: 3, value: "p1", isChecked: false },
      { id: 4, value: "p2", isChecked: false },
      { id: 5, value: "p3", isChecked: false },
      { id: 6, value: "p4", isChecked: false },
      { id: 7, value: "p5", isChecked: false },
      { id: 8, value: "p6", isChecked: false },
      { id: 9, value: "firma", isChecked: false },
    ];

    check: {
      email: false,
      telefono: false,
      p1: false,
      p2: false,
      p3: false,
      p4: false,
      p5: false,
      p6: false,
      firma: false,
      id: 0,
  
  };

  constructor(private fb: FormBuilder, private clientiService: ClientiService) {

this.form = this.fb.group({
    checkArray: this.fb.array([])
  })

  }
  ngOnInit() {
    this.apri=true;
    this.modaleChiusa=false;
    console.log(this.modaleChiusa)
    console.log("aperta")
    console.log(this.clientiModale.nome);
    console.log(this.clientiModale.telefono)
  }
 
  handleCheck(campo, valore) {
    console.log(this.campi[1].id);
    console.log(campo.id);
    this.campi.find((c) => c.id === campo.id).isChecked =
      campo.isChecked === true ? false : true;

    
   /* for(var i; i<this.campi.length; i++){
      this.campi[i].isChecked=!this.campi[i].isChecked
    }
*/
      console.log(this.campi);
    if (campo.isChecked) {
      console.log("check");
      console.log(valore);
      console.log(campo.id);
    } else {
      console.log("uncheck");
    }
  }


  salva(clientiModale){
    console.log(clientiModale);
    this.conferma=true;
    this.modaleChiusa=true;

  }

  confermare(clientiModale){
    const post = {
      id: clientiModale.id,
      email: this.campi[0].isChecked,
      firma: this.campi[8].isChecked,
      p1: this.campi[2].isChecked,
      p2: this.campi[3].isChecked,
      p3: this.campi[4].isChecked,
      p4: this.campi[5].isChecked,
      p5: this.campi[6].isChecked,
      p6: this.campi[7].isChecked,
      telefono: this.campi[1].isChecked,
    };
    console.log(post)
this.clientiService.customerMarkAsEdited(post).subscribe(response => {
  
  console.log(response)} )
  
  
  this.conferma=false;
//  this.modaleChiusa=true;
this.apri=false;
  this.campi.map((campo) => (campo.isChecked = false));
  console.log(this.modaleChiusa)
  console.log("chiusa")
 clientiModale.confermato=true;
 window.location.reload();
}
  /*onCheckboxChange(e) {

    this.Data ={id: this.clientiModale.id, name :this.clientiModale.nome, nag: this.clientiModale.nag, check :
    e.target.checked}
    console.log(this.Data)
 //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      console.log(e.target.value)
      console.log(e.target.checked)
   //   checkArray.push(new FormControl(e.target.value));
    } 

    if(!this.check){
      
    }
    //  let i: number = 0;
      //checkArray.controls.forEach((item: FormControl) => {
       // if (item.value == e.target.value) {
         // checkArray.removeAt(i);
         // return;
       // }
       // i++;
     // });
    
  }*/

  chiudi(){
   this.modaleChiusa=true;
   this.conferma=false;
   this.campi.map((campo) => (campo.isChecked = false));
   console.log(this.modaleChiusa)
   console.log("chiusa")
  }

  nonConferma(){
    this.conferma=false
    this.campi.map((campo) => (campo.isChecked = false));

  }

  handlePrivacy(p){
   
      if (p === true) {
        return "si";
      } else {
        return "no";
      }
    }

  }
/*
  annulla(){
    console.log("annulla")
    this.modaleAperta= !this.modaleAperta;
    
    console.log(this.modaleAperta)
  }
*/

  

          
 

