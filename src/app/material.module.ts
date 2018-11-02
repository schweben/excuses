import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatRadioModule, MatSelectModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }
