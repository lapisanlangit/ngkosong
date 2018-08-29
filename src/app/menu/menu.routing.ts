import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { LoginComponent } from '../login/login.component';
import { KppnComponent } from './kppn/kppn.component';
import { SatkerComponent } from './satker/satker.component';


const MenuRoutes: Routes = [
    {
        path: 'menu',
        component: MenuComponent,
        // canActivateChild: [AuthGuard],
         children: [
          { path: 'satker', component: SatkerComponent },
          { path: 'kppn', component: KppnComponent }
        
    ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(MenuRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MenuRouting { }


