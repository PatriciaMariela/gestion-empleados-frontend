import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta URL obtiene el listado de todos los empleados del backend
  private baseURL = "http://localhost:8080/api/v1/empleados";


  constructor(private httpClient : HttpClient) { }

  //Este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleado(): Observable<Empleados[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`) 
  }
}
