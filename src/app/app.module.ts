import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExcuseService } from './service/excuse.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ExcuseService,
    HttpClientModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
