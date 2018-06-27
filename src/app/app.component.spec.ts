import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ExcuseService } from './service/excuse.service';

import 'rxjs/add/observable/of';

describe('AppComponent', () => {

    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let excuseService: ExcuseService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                MaterialModule,
                HttpClientTestingModule,
            ],
            declarations: [
                AppComponent,
            ],
            providers: [
                ExcuseService,
            ],
        }).compileComponents();

        excuseService = TestBed.get(ExcuseService);
    }));

    beforeEach(() => {
        spyOn(excuseService, 'getCategories').and.returnValue(Observable.of(['Category 1', 'Category 2']));

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('Should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it('should retrieve the categories from the service on initialisation', async(() => {
        expect(app.categories).toEqual(['Category 1', 'Category 2']);
        expect(excuseService.getCategories).toHaveBeenCalled();
    }));

    it('Should get an excuse when clicked', async(() => {
        spyOn(excuseService, 'getExcuse').and.returnValue(Observable.of('Have you tried turning it off and on again?'));
        app.onClick();
        expect(app.excuse).toEqual('Have you tried turning it off and on again?');
        expect(excuseService.getExcuse).toHaveBeenCalledTimes(1);
    }));

    it('Should not have an excuse initially', async(() => {
        expect(app.excuse).toBeUndefined();
    }));

    it('Should render title in a mat-toolbar tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-toolbar').textContent).toContain('Need an excuse?');
    }));

    it('Should render instructions in a mat-card-title tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-card-title').textContent).toContain('Choose a category and then press the button to get an excuse');
    }));
});
