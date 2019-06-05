
import {map,  mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, of ,  Observable ,  Subject } from 'rxjs';



@Injectable()
export class ExcuseService {

    private URL = 'https://www.schweben.org/excuses/excuses.json';

    private excuse = new Subject<string>();

    constructor(private http: HttpClient) {
    }

    public getCategories(): Observable<string[]> {
        return this.http.get<string[]>(this.URL).pipe(
            map((result) => {
                const categories: string[] = [];
                result['categories'].forEach((category) => {
                    categories.push(category.name);
                });
                return categories;
            }));
    }

    public getCategorisedExcuse(category: string): Observable<string> {
        return this.http.get<string[]>(this.URL).pipe(
            map((result) => {
                let excuse = '';
                result['categories'].forEach((cat) => {
                    if (cat.name === category) {
                        const index = Math.floor(Math.random() * cat.excuses.length);
                        excuse = cat.excuses[index];
                    }
                });
                return excuse;
            }));
    }

    public getByoeWhatOptions(): Observable<string[]> {
        return this.http.get<string[]>(this.URL).pipe(
            map((result) => {
                return result['byoe']['what'];
            }));
    }

    public getByoeWhereOptions(): Observable<string[]> {
        return this.http.get<string[]>(this.URL).pipe(
            map((result) => {
                return result['byoe']['where'];
            }));
    }

    public getByoeExcuse(what: string, where: string): Observable<string> {
        return of(`I have to take my ${what.toLowerCase()} to the ${where.toLowerCase()}`);
    }

    public getRandomByoeExcuse(): Observable<string> {
        return forkJoin(this.getByoeWhatOptions(), this.getByoeWhereOptions())
            .pipe(
                mergeMap((options) => {
                    return this.getByoeExcuse(this.getRandomArrayElement(options[0]),
                                              this.getRandomArrayElement(options[1]));
            }));
    }

    public setExcuse(excuse: string): void {
        this.excuse.next(excuse);
    }

    public getExcuse(): Observable<string> {
        return this.excuse.asObservable();
    }

    private getRandomArrayElement(array: string[]) {
        return array[Math.floor(Math.random() * array.length)];
    }
}
