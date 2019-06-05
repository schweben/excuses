import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }
