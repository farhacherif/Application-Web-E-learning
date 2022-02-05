import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateur } from '../models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private addFormateurUrl = 'http://localhost:8080/api/addFormateur';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  addFormateur(formateur: Formateur, id: string){
    return this.http.post(this.addFormateurUrl + '/' + id, formateur);
  }
  // tslint:disable-next-line:typedef
  getFormateurs(id: any){
    return this.http.get('http://localhost:8080/api/formateurs/' + id);
  }
  // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:typedef
  deleteFormateur(id: any | null, id_organisme: any | null){
    return this.http.delete('http://localhost:8080/api/formateurs/' + id + '/' + id_organisme);
  }
  // tslint:disable-next-line:typedef
  editFormateur( idOrganisme: any, idFormateur: any , formateur: Formateur) {
    return this.http.put('http://localhost:8080/api/formateur/' + idFormateur + '/' + idOrganisme, formateur);
  }
  getFormateur(id: any) {
    return this.http.get('http://localhost:8080/api/formateur/' + id);
  }
  getAllFormateurs() {
    return this.http.get('http://localhost:8080/api/formateurs');
  }

}
