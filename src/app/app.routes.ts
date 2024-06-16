import { Routes } from '@angular/router';
import { LoginComponent } from './layers/login/login.component';
import { appGuard } from './Guards/app.guard';
import { loginGuard } from './Guards/login.guard';

export const routes: Routes = [
    { path: '', component:LoginComponent},
    { path: 'login', component:LoginComponent},
    { path:'examapp', loadChildren: () => import('./routemodels/admin/admin.module').then((m) => m.AdminModule), canActivate:[appGuard]},
];
