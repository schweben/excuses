import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { of } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ExcuseService {

    private URL = 'https://www.schweben.org/excuses/excuses.json';

    private excuse = new Subject<string>();

    constructor(private http: HttpClient) {
    }

    public getCategories(): Observable<string[]> {
        return this.http.get<string[]>(this.URL)
            .map((result) => {
                const categories: string[] = [];
                result['categories'].forEach((category) => {
                    categories.push(category.name);
                });
                return categories;
            });
    }

    public getCategorisedExcuse(category: string): Observable<string> {
        return this.http.get<string[]>(this.URL)
            .map((result) => {
                let excuse = '';
                result['categories'].forEach((cat) => {
                    if (cat.name === category) {
                        const index = Math.floor(Math.random() * cat.excuses.length);
                        excuse = cat.excuses[index];
                    }
                });
                return excuse;
            });
    }

    public getBuiltExcuse(): Observable<string> {
        return this.http.get<string[]>(this.URL)
            .map((result) => {
                const byoe = result['byoe'];
                const what = byoe['what'][Math.floor(Math.random() * byoe['what'].length)];
                const where = byoe['where'][Math.floor(Math.random() * byoe['where'].length)];

                return `I have to take the ${what} to the ${where}`;
            });
    }

    public setExcuse(excuse: string): void {
        this.excuse.next(excuse);
    }

    public getExcuse(): Observable<string> {
        return this.excuse.asObservable();
    }
}
