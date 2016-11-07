/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ChartComponent } from './../../chart/chart.component';
import { ChartModule } from 'angular2-highcharts';
import { StatisticsComponent } from './statistics.component';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartComponent, StatisticsComponent],
      imports: [ChartModule]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });


  it('should create', () => expect(component).toBeDefined());

  it('should display Statistics title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  });
});
