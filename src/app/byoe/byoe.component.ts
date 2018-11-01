import { Component, OnInit } from '@angular/core';

import { ExcuseService } from '../service/excuse.service';

@Component({
    selector: 'ex-byoe',
    templateUrl: './byoe.component.html',
    styleUrls: ['./byoe.component.css'],
})
export class ByoeComponent {

    private excuse: string;

    constructor(private excuseService: ExcuseService) {
    }

    public onClick() {
        this.excuseService.getBuiltExcuse().subscribe((excuse) => {
            // If the service returns the same excuse as last time then get another one
            if (excuse === this.excuse) {
                this.onClick();
            } else {
                this.excuse = excuse;
                this.excuseService.setExcuse(excuse);
            }
        });
    }
}
