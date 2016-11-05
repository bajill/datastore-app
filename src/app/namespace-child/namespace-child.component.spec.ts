/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NamespaceChildComponent } from './namespace-child.component';

describe('NamespaceChildComponent', () => {
  let component: NamespaceChildComponent;
  let fixture: ComponentFixture<NamespaceChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamespaceChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespaceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
