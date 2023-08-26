import { Component } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
  patient: Patient = new Patient();

  constructor(private service: PatientService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  submitPatient() {
    this.service.createPatient(this.patient);
    console.log('Patient details submitted:', this.patient);
    this.patient = new Patient(); // Clear the form after submission
  }

  navAdd() {
    this.router.navigate(['/add']);
  }
}
