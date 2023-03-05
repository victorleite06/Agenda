import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  exports: [
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
