import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { of } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ExcuseService } from './service/excuse.service';

import { MockCategorisedExcuseComponent } from './mocks/mock.categorised-excuse.component';
import { MockExcuseComponent } from './mocks/mock.excuse.component';

describe('AppComponent', () => {

    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                MockCategorisedExcuseComponent,
                MockExcuseComponent,
            ],
            imports: [
                MaterialModule,
            ],
            providers: [
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('Should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it('Should render title in a mat-toolbar tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-toolbar').textContent).toContain('Need an excuse?');
    }));
});
