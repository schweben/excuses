import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ExcuseService } from './excuse.service';

describe('ExcuseService', () => {
    let excuseService: ExcuseService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                ExcuseService,
            ],
        });

        excuseService = TestBed.get(ExcuseService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('Should return a single excuse', (done) => {
        excuseService.getExcuse().subscribe((excuse) => {
            expect(excuse).toBe('It works on my machine');
            done();
        });

        const excuseRequest = httpMock.expectOne('http://www.schweben.org/excuses/excuses.json');
        excuseRequest.flush(['It works on my machine']);
        httpMock.verify();
    });
});
