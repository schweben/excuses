import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const excuses = {
            categories: [
                {
                    name: 'Test category 1',
                    excuses: [
                        'Excuse 1',
                        'Excuse 2',
                    ],
                },
                {
                    name: 'Test category 2',
                    excuses: [
                        'Excuse 3',
                        'Excuse 4',
                    ],
                },
            ],
            byoe: {
                what: [
                    'car',
                    'dog',
                ],
                where: [
                    'vet',
                    'garage',
                ],
            },
        };

        if (request.url.endsWith('/excuses.json') && request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: excuses }));
        } else {
            return Observable.throw('Not found');
        }
    }
}
