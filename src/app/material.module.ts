import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDividerModule, MatRadioModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatRadioModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatRadioModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }
