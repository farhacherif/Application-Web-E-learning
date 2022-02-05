import { Profil } from './../models/profil';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  constructor(private http: HttpClient) { }

  getAllProfil(){
    return this.http.get('http://localhost:8080/profils');
  }
  addProfil(profil: Profil){
    return this.http.post("http://localhost:8080/addProfil", profil);
  }
  editProfil(profil: Profil, idProfil: any){
    return this.http.put('http://localhost:8080/updateProfil/' + idProfil ,profil)
  }
  deleteProfil( idProfil: any) {
    return this.http.delete('http://localhost:8080/deleteProfil/' + idProfil );
  }
  getProfil(idProfil:any){
    return this.http.get('http://localhost:8080/profil/'+idProfil);
  }


}
