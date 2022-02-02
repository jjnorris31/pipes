import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { CustomsComponent } from './pages/customs/customs.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    CustomsComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    CustomsComponent
  ]
})
export class SalesModule { }
