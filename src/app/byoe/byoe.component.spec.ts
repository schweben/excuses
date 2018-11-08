import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { of } from 'rxjs';

import { MaterialModule } from '../material.module';
import { ExcuseService } from '../service/excuse.service';
import { ByoeComponent } from './byoe.component';

describe('ByoeComponent', () => {
    let component: ByoeComponent;
    let fixture: ComponentFixture<ByoeComponent>;
    let excuseService: ExcuseService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ByoeComponent,
            ],
            imports: [
                BrowserAnimationsModule,
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
        spyOn(excuseService, 'getByoeWhatOptions').and.returnValue(of(['dog']));
        spyOn(excuseService, 'getByoeWhereOptions').and.returnValue(of(['dentist']));

        fixture = TestBed.createComponent(ByoeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should retrieve the options from the service on initialisation', async(() => {
        expect(component.whatOptions).toEqual(['dog']);
        expect(component.whereOptions).toEqual(['dentist']);
        expect(excuseService.getByoeWhatOptions).toHaveBeenCalled();
        expect(excuseService.getByoeWhereOptions).toHaveBeenCalled();
    }));

    it('should get an excuse when clicked', async(() => {
        spyOn(excuseService, 'getByoeExcuse').and.returnValue(of('I am taking my dog to the dentist'));
        spyOn(excuseService, 'setExcuse');

        component.what = 'dog';
        component.where = 'dentist';
        component.onClick();

        expect(excuseService.getByoeExcuse).toHaveBeenCalledWith('dog', 'dentist');
        expect(excuseService.setExcuse).toHaveBeenCalledWith('I am taking my dog to the dentist');
    }));

    it('should get a random excuse when clicked', async(() => {
        spyOn(excuseService, 'getRandomByoeExcuse').and.returnValue(of('I am taking my dog to the dentist'));
        spyOn(excuseService, 'setExcuse');

        component.getRandom();

        expect(excuseService.getRandomByoeExcuse).toHaveBeenCalledTimes(1);
        expect(excuseService.setExcuse).toHaveBeenCalledWith('I am taking my dog to the dentist');
    }));

    it('should render instructions in a mat-card-title tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-card-title').textContent).toContain('Build your own excuse or get a random one');
    }));

    it('should return valid options if both \'what\' and \'where\' are set', async(() => {
        component.what = 'dog';
        component.where = 'dentist';

        expect(component.validOptions()).toEqual(true);
    }));

    it('should return invalid options if \'what\' is not set', async(() => {
        component.where = 'dentist';

        expect(component.validOptions()).toEqual(false);
    }));

    it('should return invalid options if \'where\' is not set', async(() => {
        component.what = 'dog';

        expect(component.validOptions()).toEqual(false);
    }));

    it('should return invalid options if neither \'what\' and \'where\' are set', async(() => {
        expect(component.validOptions()).toEqual(false);
    }));
});
