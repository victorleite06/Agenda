import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { contato } from 'src/app/model/contato.model';
import { ModalCadastroContatoComponent } from '../modal-cadastro-contato/modal-cadastro-contato.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colunasNomes = ['acao', 'id', 'nome', 'endereco', 'telefone']
  dataSource: contato[] = [
    { id: 1, nome: 'Teste', endereco: 'Rua Timbiras', telefone: '(31) 9 8455-4635' }
  ]

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  criar() {
    let dialog = this.dialog.open(ModalCadastroContatoComponent,{
      width: '500px', height: '500px'
    })
    
  }
}
