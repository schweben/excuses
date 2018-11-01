import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ByoeComponent } from './byoe/byoe.component';
import { CategorisedExcuseComponent } from './categories/categorised-excuse.component';
import { ExcuseComponent } from './excuse/excuse.component';
import { MaterialModule } from './material.module';
import { ExcuseService } from './service/excuse.service';

import { environment } from '../environments/environment';

import { FakeBackendInterceptor } from './service/fake-backend.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ByoeComponent,
    ExcuseComponent,
    CategorisedExcuseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    ExcuseService,

    environment.production ?
      HttpClientModule :
      {
        provide: HTTP_INTERCEPTORS,
        useClass: FakeBackendInterceptor,
        multi: true,
      },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
