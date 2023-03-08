import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contato } from 'src/app/model/contato.model';
import { ContatoService } from 'src/app/service/contato.service';


@Component({
  selector: 'app-modal-cadastro-contato',
  templateUrl: './modal-cadastro-contato.component.html',
  styleUrls: ['./modal-cadastro-contato.component.css']
})
export class ModalCadastroContatoComponent implements OnInit {

  txtTitulo = ''
  contato: Contato = new Contato()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<ModalCadastroContatoComponent>,
    private contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    this.contato = this.data.contato ? this.data.contato : new Contato();
    (this.contato.id === undefined || this.contato.id === null) ? this.txtTitulo = 'Cadastro de Contato' : this.txtTitulo = 'Edição de Contato' 
  }

  salvar() {
    this.contatoService.salvar(this.contato).subscribe({
      next: res => {
        this.dialog.close(true);
      },
      error: err => {

      }
    })
  }

  telefoneMask(event: any) {
    if (event.key && (event.key >= '0' && event.key <= '9')) {
      if (this.contato.telefone && this.contato.telefone.toString().length == 10)
        this.contato.telefone = parseInt(this.contato.telefone.toString() + event.key);
    }
    if (this.contato.telefone && this.contato.telefone.toString().length <= 10) return '(00) 0000-0000'

    return '(00) 00000-0000';

  }
}
