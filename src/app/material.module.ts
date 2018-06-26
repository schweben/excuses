import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatRadioModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatRadioModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }
