import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { MenuRouting } from './menu.routing';
import { KppnComponent } from './kppn/kppn.component';
import { SatkerComponent } from './satker/satker.component';
import { KppnFilterPipe } from './kppn/kppn.pipe';
import { KppnService } from './kppn/kppn.service';
import { SatkerFilterPipe } from './satker/satker.pipe';
import { SatkerService } from './satker/satker.service';



@NgModule({
  imports: [
    SharedModule,
    MenuRouting
  ],
  declarations: [MenuComponent,
     KppnComponent, 
     SatkerComponent,
     KppnFilterPipe,
     SatkerFilterPipe
     
    ],
  providers:[
    KppnService,
    SatkerService
  ],
})
export class MenuModule { }
