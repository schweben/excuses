import { Component } from '@angular/core';

import { ExcuseService } from './service/excuse.service';

@Component({
  selector: 'ex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public excuse: string;

  constructor(private excuseService: ExcuseService) {
  }

  public onClick() {
    this.excuseService.getExcuse().subscribe((excuse) => {
      this.excuse = excuse;
    });
  }
}
