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
            byoe: {
                what: [
                    'goldfish',
                ],
                where: [
                    'garage',
                ],
            },
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

    it ('should return two categories', (done) => {
        excuseService.getCategories().subscribe((excuse) => {
            expect(excuse).toEqual(['Test category 1', 'Test category 2']);
            done();
        });

        const excuseRequest = httpMock.expectOne('https://www.schweben.org/excuses/excuses.json');
        excuseRequest.flush(dummyResponse);
        httpMock.verify();
    });

    it('should return a single categorised excuse', (done) => {
        excuseService.getCategorisedExcuse('Test category 1').subscribe((excuse) => {
            expect(excuse).toBe('Excuse 1');
            done();
        });

        const excuseRequest = httpMock.expectOne('https://www.schweben.org/excuses/excuses.json');
        excuseRequest.flush(dummyResponse);
        httpMock.verify();
    });

    it('should return a \'build your own\' excuse', (done) => {
        excuseService.getBuiltExcuse().subscribe((excuse) => {
            expect(excuse).toBe('I have to take the goldfish to the garage');
            done();
        });

        const excuseRequest = httpMock.expectOne('https://www.schweben.org/excuses/excuses.json');
        excuseRequest.flush(dummyResponse);
        httpMock.verify();
    });
});
