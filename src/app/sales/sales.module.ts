import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { CustomsComponent } from './pages/customs/customs.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    CustomsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    CustomsComponent
  ]
})
export class SalesModule { }
