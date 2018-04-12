import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ExcuseService {

    private URL = 'http://www.schweben.org/excuses/excuses.json';

    constructor(private http: HttpClient) {
    }

    public getExcuse(): Observable<string> {
        return this.http.get<string[]>(this.URL)
            .map((excuses) => {
                const index = Math.floor(Math.random() * excuses.length);
                return excuses[index];
            });
    }
}
