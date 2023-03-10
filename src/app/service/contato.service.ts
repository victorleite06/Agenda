import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contato } from '../model/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private url: string = environment.urlAPI

  constructor(
    private http: HttpClient
  ) { }

  buscarContatos(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/contato');
  }

  salvar(contato: Contato): Observable<any> {
    return this.http.post<any>(this.url + '/contato', contato);
  }

  deletar(idContato: number): Observable<any> {
    return this.http.get<any>(this.url + `/contato/deletar/${idContato}`)
  }
}
