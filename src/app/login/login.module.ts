import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';



@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  
  declarations: [LoginComponent],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
