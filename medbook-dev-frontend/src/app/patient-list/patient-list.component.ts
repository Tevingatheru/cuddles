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
  patients: any;

  constructor(private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showAllPatients();
  }

  showAllPatients() {
    this.patients = this.patientService.getAllPatients().subscribe(
      patient => {
        console.log("show all", JSON.stringify(patient));
        this.patients = JSON.parse(JSON.stringify(patient))
      }
    );
  }

  navAdd() {
    this.router.navigate(['/details']);
  }
}
