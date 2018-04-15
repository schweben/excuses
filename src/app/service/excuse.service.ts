import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ExcuseService {

    private URL = 'http://www.schweben.org/excuses/excuses.json';

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

    public getExcuse(category: string): Observable<string> {
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
}
