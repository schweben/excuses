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
                    name: 'IT',
                    excuses: [
                        'It works on my machine!',
                        'It\'s not my fault',
                        'I\'ve never seen it do that before',
                        'Have you tried turning it off and on again?',
                    ],
                },
                {
                    name: 'Lateness',
                    excuses: [
                        'My mum overslept',
                        'My mum spent too much time faffing with her hair',
                        'I was too busy playing Lego',
                        'My clothes were in the washing machine',
                    ],
                },
            ],
            byoe: {
                what: [
                    'Cat',
                    'Car',
                    'Dog',
                    'Wife',
                    'Goldfish',
                    'Hamster',
                ],
                where: [
                    'Doctor',
                    'Vet',
                    'Garage',
                    'Electrician',
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
