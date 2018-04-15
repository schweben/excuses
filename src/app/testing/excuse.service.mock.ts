import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

export class MockExcuseService {

    public getExcuse(): Observable<string> {
        return Observable.of('Have you tried turning it off and on again?');
    }

    public getCategories(): Observable<string[]> {
        return Observable.of(['Category 1', 'Category 2']);
    }
}
