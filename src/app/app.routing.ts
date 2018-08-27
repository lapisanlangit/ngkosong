import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,

    },
    {
        path: 'menu',
        component: MenuComponent
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }

];

export const routing = RouterModule.forRoot(appRoutes);
