import { Component, OnInit } from '@angular/core';

import { ExcuseService } from '../service/excuse.service';

@Component({
    selector: 'ex-categorised-excuse',
    templateUrl: './categorised-excuse.component.html',
    styleUrls: ['./categorised-excuse.component.css'],
})
export class CategorisedExcuseComponent implements OnInit {

    public categories: string[];
    public category: string;
    public excuse: string;

    constructor(private excuseService: ExcuseService) {
    }

    public ngOnInit(): void {
        this.excuseService.getCategories().subscribe((categories) => {
            this.categories = categories;
        });
    }

    public onClick() {
        this.excuseService.getCategorisedExcuse(this.category).subscribe((excuse) => {
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
