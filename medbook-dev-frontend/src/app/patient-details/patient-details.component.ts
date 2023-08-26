import { Component } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  patient: Patient = new Patient();
  constructor(private service: PatientService) { }

  submitPatient() {
    console.log('Patient details submitted:', this.patient);
    this.service.createPatient(this.patient).subscribe(data => {
      console.log("Data received", data);
    });
    alert("Patient details have been stored");
    this.patient = new Patient(); 
  }
}
