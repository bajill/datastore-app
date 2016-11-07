/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NamespaceComponent } from './namespace.component';
import { AppService } from './../app.service';
import {HttpModule} from '@angular/http';

describe('NamespaceComponent', () => {
  let component: NamespaceComponent;
  let fixture: ComponentFixture<NamespaceComponent>;
  let appService: AppService;
  let de: DebugElement;
  let el: HTMLElement;



  beforeEach(async(() => {
    

    TestBed.configureTestingModule({
      declarations: [ NamespaceComponent ],
      providers: [ AppService ],
      imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => expect(component).toBeDefined());

});
