import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { CustomsComponent } from './pages/customs/customs.component';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    CustomsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    FieldsetModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    CustomsComponent
  ]
})
export class SalesModule { }
