/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDatastoreComponent } from './user-datastore.component';

describe('UserDatastoreComponent', () => {
  let component: UserDatastoreComponent;
  let fixture: ComponentFixture<UserDatastoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDatastoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDatastoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
