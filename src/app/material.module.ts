import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDividerModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatToolbarModule,
    ],
    exports: [
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }
