import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroContatoComponent } from './modal-cadastro-contato.component';

describe('ModalCadastroContatoComponent', () => {
  let component: ModalCadastroContatoComponent;
  let fixture: ComponentFixture<ModalCadastroContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCadastroContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCadastroContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
