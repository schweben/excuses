import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { MaterialModule } from '../material.module';
import { ExcuseService } from '../service/excuse.service';
import { CategorisedExcuseComponent } from './categorised-excuse.component';

describe('CategorisedExcuseComponent', () => {

    let component: CategorisedExcuseComponent;
    let fixture: ComponentFixture<CategorisedExcuseComponent>;
    let excuseService: ExcuseService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CategorisedExcuseComponent,
            ],
            imports: [
                FormsModule,
                HttpClientTestingModule,
                MaterialModule,
            ],
            providers: [
                ExcuseService,
            ],
        }).compileComponents();

        excuseService = TestBed.get(ExcuseService);
    }));

    beforeEach(() => {
        spyOn(excuseService, 'getCategories').and.returnValue(of(['Category 1', 'Category 2']));

        fixture = TestBed.createComponent(CategorisedExcuseComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should retrieve the categories from the service on initialisation', async(() => {
        expect(component.categories).toEqual(['Category 1', 'Category 2']);
        expect(excuseService.getCategories).toHaveBeenCalled();
    }));

    it('should get an excuse when clicked', async(() => {
        spyOn(excuseService, 'getCategorisedExcuse').and.returnValue(of('Have you tried turning it off and on again?'));
        spyOn(excuseService, 'setExcuse');

        component.onClick();

        expect(excuseService.getCategorisedExcuse).toHaveBeenCalledTimes(1);
        expect(excuseService.setExcuse).toHaveBeenCalledWith('Have you tried turning it off and on again?');
    }));

    it('should render instructions in a mat-card-title tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-card-title').textContent).toContain('Choose a category and then press the button to get an excuse');
    }));
});
