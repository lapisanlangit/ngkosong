import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { BaseService } from './base/base.service';
import { PesanComponent } from './pesan/pesan.component';
import { NodataComponent } from './nodata/nodata.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { httpInterceptorProviders } from './base/interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    BaseComponent,
    PesanComponent,
    NodataComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    PesanComponent,
    BaseComponent,
    NodataComponent,
    HttpClientModule
],
  providers: [
    BaseService,
    httpInterceptorProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]
})
export class SharedModule { }
