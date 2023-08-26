import { Component } from '@angular/core';
import { Patient } from '../model/patient.model';
import { PatientService } from '../service/patient.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {
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
    this.router.navigate(['/details/'+ this.patientId]);
  }

  delete() {
    this._servicesService.deletePatientById(this.patientId).subscribe(
      data => this.router.navigate(['/'])
    );
  }
  navAdd() {
    this.router.navigate(['/details']);
  }
}
