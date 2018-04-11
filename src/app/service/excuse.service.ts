import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class ExcuseService {

    public getExcuse(): Observable<string> {
        return Observable.of('It works on my machine');
    }
}
