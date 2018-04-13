import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const excuses = [
            'It works on my machine!',
            'It\'s not my fault',
            'I\'ve never seen it do that before',
            'Have you tried turning it off and on again?',
            'I can\'t reproduce that',
        ];

        if (request.url.endsWith('/excuses.json') && request.method === 'GET') {
            return Observable.of(new HttpResponse({ status: 200, body: excuses }));
        } else {
            return Observable.throw('Not found');
        }
    }
}
