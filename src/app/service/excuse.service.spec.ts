import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ExcuseService } from './excuse.service';

describe('ExcuseService', () => {
    const dummyResponse = {
            categories: [
                {
                    name: 'Test category 1',
                    excuses: [
                        'Excuse 1',
                    ],
                },
                {
                    name: 'Test category 2',
                    excuses: [
                        'Excuse 2',
                    ],
                },
            ],
        };

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

    it ('Should return two categories', (done) => {
        excuseService.getCategories().subscribe((excuse) => {
            expect(excuse).toEqual(['Test category 1', 'Test category 2']);
            done();
        });

        const excuseRequest = httpMock.expectOne('https://www.schweben.org/excuses/excuses.json');
        excuseRequest.flush(dummyResponse);
        httpMock.verify();
    });

    it('Should return a single excuse', (done) => {
        excuseService.getExcuse('Test category 1').subscribe((excuse) => {
            expect(excuse).toBe('Excuse 1');
            done();
        });

        const excuseRequest = httpMock.expectOne('https://www.schweben.org/excuses/excuses.json');
        excuseRequest.flush(dummyResponse);
        httpMock.verify();
    });
});
