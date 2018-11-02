import { Component, OnInit } from '@angular/core';

import { ExcuseService } from '../service/excuse.service';

@Component({
    selector: 'ex-byoe',
    templateUrl: './byoe.component.html',
    styleUrls: ['./byoe.component.css'],
})
export class ByoeComponent implements OnInit {

    public whatOptions: string[];
    public whereOptions: string[];

    public what: string;
    public where: string;

    constructor(private excuseService: ExcuseService) {
    }

    public ngOnInit(): void {
        this.excuseService.getByoeWhatOptions().subscribe((options) => {
            this.whatOptions = options;
        });

        this.excuseService.getByoeWhereOptions().subscribe((options) => {
            this.whereOptions = options;
        });
    }

    public onClick() {
        this.excuseService.getByoeExcuse(this.what, this.where).subscribe((excuse) => {
            this.excuseService.setExcuse(excuse);
        });
    }

    public validOptions(): boolean {
        return (this.what != null && this.where != null);
    }
}
