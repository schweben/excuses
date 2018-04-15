import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const excuses = {
            'Test category 1': [
                'Excuse 1',
                'Excuse 2',
            ],
            'Test category 2': [
                'Excuse 3',
                'Excuse 4',
            ],
        };

        if (request.url.endsWith('/excuses.json') && request.method === 'GET') {
            return Observable.of(new HttpResponse({ status: 200, body: excuses }));
        } else {
            return Observable.throw('Not found');
        }
    }
}
