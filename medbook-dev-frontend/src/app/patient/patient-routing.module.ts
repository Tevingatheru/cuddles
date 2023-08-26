import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from '../patient-list/patient-list.component';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';

const routes: Routes = [
  { path: 'list',  component: PatientListComponent },
  { path: 'details',  component: PatientDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
