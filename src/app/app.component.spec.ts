import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ExcuseService } from './service/excuse.service';
import { MockExcuseService } from './testing/excuse.service.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

  it('Should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Need an excuse?');
  }));

  it('Should render instructions in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Press the button to get an excuse');
  }));
});
