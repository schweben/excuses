import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ByoeComponent } from './byoe/byoe.component';
import { CategorisedExcuseComponent } from './categories/categorised-excuse.component';
import { ExcuseComponent } from './excuse/excuse.component';
import { MaterialModule } from './material.module';
import { ExcuseService } from './service/excuse.service';

import { environment } from '../environments/environment';

import { FakeBackendInterceptor } from './service/fake-backend.interceptor';
import { MatGridList } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    ByoeComponent,
    ExcuseComponent,
    CategorisedExcuseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
