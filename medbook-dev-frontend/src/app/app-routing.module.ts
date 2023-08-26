import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'list',  component: PatientListComponent },
  { path: 'details',  component: PatientDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent }, // wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
