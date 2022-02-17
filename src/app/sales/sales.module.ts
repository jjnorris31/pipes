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
import { CamelCasePipe } from './pipes/camelCase.pipe';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    CustomsComponent,
    CamelCasePipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    CardModule,
    FieldsetModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    ToolbarModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    CommonsComponent,
    CustomsComponent
  ]
})
export class SalesModule { }
