import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const pagesRoutes: Routes = [
    {
        path: '', component: UsersComponent
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);