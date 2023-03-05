import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { contato } from 'src/app/model/contato.model';

@Component({
  selector: 'app-modal-cadastro-contato',
  templateUrl: './modal-cadastro-contato.component.html',
  styleUrls: ['./modal-cadastro-contato.component.css']
})
export class ModalCadastroContatoComponent implements OnInit {

  txtTitulo = ''
  contato: contato = new contato()

  constructor(
    private dialog: MatDialogRef<ModalCadastroContatoComponent>
  ) { }

  ngOnInit(): void {
    (this.contato.id === undefined || this.contato.id === null) ? this.txtTitulo = 'Cadastro de Contato' : this.txtTitulo = 'Edição de Contato' 
  }

}
