import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ModalCadastroContatoComponent } from './components/modal-cadastro-contato/modal-cadastro-contato.component';
import { ContatoService } from './service/contato.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { PhonePipe } from './pipe/phone.pipe';

export const custoMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$',
  suffix: '',
  thousands: '.'
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalCadastroContatoComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    ContatoService,
    { provide: CURRENCY_MASK_CONFIG, useValue: custoMaskConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
