import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports components
import { MaterialModule } from '../../../shared/material/material.module';
import { DashboardSandbox } from './dashboard.sandbox';

@NgModule({
    declarations: [
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    providers: [
        DashboardSandbox
    ]
})
export class DashboardModule {
}