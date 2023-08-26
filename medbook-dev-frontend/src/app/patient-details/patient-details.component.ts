import { Component } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../service/patient.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent {
  private patientId:any;
  protected patient:any;
  constructor(private _servicesService : PatientService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.patientId = params.get('id');
        return this._servicesService.getPatientById(this.patientId);
      })
    ).subscribe(data => {
      this.patient = data;
      console.log("Patient after: " + JSON.stringify(this.patient));
    });
  }

  edit() {
    this.router.navigate(['/edit/'+ this.patientId]);
  }

  delete() {
    this._servicesService.deletePatientById(this.patientId).subscribe(
      data => this.router.navigate(['/'])
    );
  }
}
