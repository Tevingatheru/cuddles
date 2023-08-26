import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url: string = 'http://localhost:8000/api';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': "application/json" })
  };
  constructor(private httpClient: HttpClient) { }


  getAllPatients() {
    return this.httpClient.get(`${this.url}/patients/all`);
  }

  getPatientById(patientId: number) {
    return this.httpClient.get(`${this.url}/patients/id/` + patientId);
  }

  createPatient(patient:any){
    return this.httpClient.post(`${this.url}/patients/save`, patient, this.httpOptions);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.httpClient.put(`${this.url}/patients/id/` + id + `/update`, patient, this.httpOptions);
  }

  deletePatientById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/patients/id/` + id);
  }
}
