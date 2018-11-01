import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
        fixture = TestBed.createComponent(ByoeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should get an excuse when clicked', async(() => {
        spyOn(excuseService, 'getBuiltExcuse').and.returnValue(of('I am taking my dog to the dentist'));
        spyOn(excuseService, 'setExcuse');

        component.onClick();

        expect(excuseService.getBuiltExcuse).toHaveBeenCalledTimes(1);
        expect(excuseService.setExcuse).toHaveBeenCalledWith('I am taking my dog to the dentist');
    }));

    it('should render instructions in a mat-card-title tag', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-card-title').textContent).toContain('Build your own excuse...');
    }));
});
