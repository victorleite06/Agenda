import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contato } from 'src/app/model/contato.model';
import { ModalCadastroContatoComponent } from '../modal-cadastro-contato/modal-cadastro-contato.component';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colunasNomes = ['acao', 'id', 'nome', 'endereco', 'telefone']
  dataSource: Contato[] = [
    { id: 1, nome: 'Teste', endereco: 'Rua Teste', telefone: 31984554635 }
  ]

  constructor(
    private dialog: MatDialog,
    private contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    //this.buscarContatos()
  }

  buscarContatos() {
    this.contatoService.buscarContatos().subscribe({
      next: res => {
        this.dataSource = res
      }
    })
  }

  criar() {
    let dialog = this.dialog.open(ModalCadastroContatoComponent,{
      width: '500px', height: '500px', data: { contato: new Contato() }
    })
    dialog.afterClosed().subscribe({
      next: res => {
        if(res) {
          this.buscarContatos()
        }
      }
    })
  }

  editar(contato: Contato) {
    let dialog = this.dialog.open(ModalCadastroContatoComponent,{
      width: '500px', height: '500px', data: { contato: contato }
    })
    dialog.afterClosed().subscribe({
      next: res => {
        if(res) {
          this.buscarContatos()
        }
      }
    })
  }

  deletar(contato: Contato) {
    this.contatoService.deletar(contato.id!).subscribe({
      next: res => {
        this.buscarContatos()
      },
      error: err => {

      }
    })
  }
}
