import { RicercaComponent } from './../ricerca/ricerca.component';
import { HttpResponse } from "@angular/common/http";
import { SimpleChanges } from "@angular/core";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { AuthService } from "../_services/auth.service";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
 // @Output() clienti = new EventEmitter<any>();
  constructor(private authService: AuthService) {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  modaleParent: any;
  clientiParent:any
  ping: string;
  userPing:string;
  adminPing: string;
clientiModaleParent: any
  ngOnInit() {

    this.authService.ping().subscribe((response) => {
      this.ping=response.toString()
    });

    this.authService.userPing().subscribe((response) => {
      this.userPing=response.toString()
    });

    this.authService.adminPing().subscribe((response) => {
      this.adminPing=response.toString()
    });



  }

  logout(){
    this.authService.logout()
  }

  

}
