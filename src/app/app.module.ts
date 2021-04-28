import { FilialiService } from './_services/filiali.service';
import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuardService } from "./_guards/auth-guard.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { RicercaComponent } from './ricerca/ricerca.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientiComponent } from './clienti/clienti.component';
import { ModaleComponent } from './modale/modale.component';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import {MatDialogModule, MatPaginatorModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    
    RicercaComponent,
    
    NavbarComponent,
    
    ClientiComponent,
    ModaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  entryComponents: [ ModaleComponent ],

  providers: [AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    FilialiService, NgbActiveModal, MatDialog, Overlay, ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
