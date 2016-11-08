/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';

describe('StatisticsComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
  });


  it('should create', () => expect(component).toBeDefined());

 it('should display home component title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.title);
  });

});
