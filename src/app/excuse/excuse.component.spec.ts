import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { MaterialModule } from '../material.module';
import { ExcuseService } from '../service/excuse.service';
import { ExcuseComponent } from './excuse.component';

describe('ExcuseComponent', () => {

    let component: ExcuseComponent;
    let fixture: ComponentFixture<ExcuseComponent>;
    let excuseService: ExcuseService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ExcuseComponent,
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

        fixture = TestBed.createComponent(ExcuseComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', async(() => {
        expect(component).toBeTruthy();
    }));

});
