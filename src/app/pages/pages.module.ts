import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports components
import { UsersComponent } from './users/users.component';
import { PAGES_ROUTES } from './pages.routes';
import { UsersSandbox } from './users/users.sandbox';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
    declarations: [
        UsersComponent
    ],
    exports: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        PAGES_ROUTES,
        MaterialModule
    ],
    providers: [
        UsersSandbox
    ]
})
export class PagesModule {
}