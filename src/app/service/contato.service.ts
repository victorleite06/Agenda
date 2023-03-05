import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { contato } from '../model/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private url = environment.urlAPI + '/contato'

  constructor(
    private http: HttpClient
  ) { }

  buscarContatos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  salvar(contato: contato): Observable<any> {
    return this.http.post<any>(this.url, contato);
  }
}
