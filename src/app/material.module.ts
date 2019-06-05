import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatRadioModule, MatSelectModule, MatToolbarModule, MatGridListModule } from '@angular/material';

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
