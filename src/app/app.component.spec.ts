import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ExcuseService } from './service/excuse.service';
import { MockExcuseService } from './testing/excuse.service.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: ExcuseService, useClass: MockExcuseService },
      ],
    }).compileComponents();
  }));

  it('Should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Should get an excuse when clicked', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onClick();
    expect(app.excuse).toEqual('Have you tried turning it off and on again?');
  }));

  it('Should not have an excuse initially', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.excuse).toBeUndefined();
  }));

  it('Should render title in a mat-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Need an excuse?');
  }));

  it('Should render instructions in a mat-card-title tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('Choose a category and then press the button to get an excuse');
  }));
});
