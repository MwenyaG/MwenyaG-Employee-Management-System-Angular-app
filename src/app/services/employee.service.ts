import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment'; //to import the url from the env

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  baseUrl: string = environment.baseUrl; //base url from env

  constructor(private httpClient: HttpClient) {}

  //to save employee
  saveEmployee(data: any): Observable<any> {
    return this.getEmployeeById(data.id).pipe(
      switchMap((employee) => {
        if (employee) {
          return this.updateEmployee(data.id, data);
        } else {
          return this.addEmployee(data);
        }
      })
    );
  }

  //to add employee
  addEmployee(data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl, data);
  }

  //to update employee
  updateEmployee(id: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, data);
  }

  //to get employee for table
  getEmployeeList(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  //get employee by id
  getEmployeeById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).pipe(
      map((response) => (response ? response : null))
    );
  }

  //to delete employee based on their id
  deleteEmployee(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
