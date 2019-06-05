import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ExcuseService } from '../service/excuse.service';

@Component({
    selector: 'ex-excuse',
    templateUrl: './excuse.component.html',
    styleUrls: ['./excuse.component.css'],
})
export class ExcuseComponent implements OnDestroy {

    public excuse: string;

    private excuseSubscription: Subscription;

    constructor(private excuseService: ExcuseService) {
        this.excuseSubscription = this.excuseService.getExcuse().subscribe((excuse) => {
            this.excuse = excuse;
        });
    }

    public ngOnDestroy() {
        this.excuseSubscription.unsubscribe();
    }
}
