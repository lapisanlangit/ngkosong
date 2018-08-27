import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../shared/shared.module';
import { MenuRouting } from './menu.routing';
import { KppnComponent } from './kppn/kppn.component';
import { SatkerComponent } from './satker/satker.component';
import { KppnService } from './kppn/kppn.service';




@NgModule({
  imports: [
    SharedModule,
    MenuRouting
  ],
  declarations: [MenuComponent, KppnComponent, SatkerComponent],
  providers:[
    KppnService
  ],
})
export class MenuModule { }
