import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridService } from './service/grid.service';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        GridService
      ],
      imports: [
        BrowserModule,
        AgGridModule.withComponents([])
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'financial-instruments'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('financial-instruments');
  });

  it('should render grid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#grid')).toBeTruthy();
  });

  it('should render color style when value is below zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cellStyle({value: -2})).toBeDefined();
  });

  it('should not render color style when value is zero or above', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cellStyle({value: 2})).toBeUndefined();
  });
});
