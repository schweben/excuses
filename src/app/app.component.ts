import { Component, OnInit } from '@angular/core';

import { ExcuseService } from './service/excuse.service';

@Component({
  selector: 'ex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public excuse: string;
  public categories: string[];
  public category: string;

  constructor(private excuseService: ExcuseService) {
  }

  public ngOnInit(): void {
    this.excuseService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  public onClick() {
    this.excuseService.getExcuse(this.category).subscribe((excuse) => {
      // If the service returns the same excuse as last time then get another one
      if (excuse === this.excuse) {
        this.onClick();
      } else {
        this.excuse = excuse;
      }
    });
  }
}
