import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { CustomsComponent } from './sales/pages/customs/customs.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { CommonsComponent } from './sales/pages/commons/commons.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: CommonsComponent,
        pathMatch: 'full'
    },
    {
        path: 'numbers',
        component: NumbersComponent
    },
    {
        path: 'customs',
        component: CustomsComponent
    },
    {
        path: 'no-commons',
        component: NoCommonsComponent
    }, {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
})
export class AppRouterModule {

}