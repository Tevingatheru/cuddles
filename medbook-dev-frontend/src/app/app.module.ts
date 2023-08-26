import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientModule } from './patient/patient.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientDetailsComponent,
    PatientListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PatientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
