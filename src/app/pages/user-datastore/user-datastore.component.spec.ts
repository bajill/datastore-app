/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { NamespaceComponent } from './../../namespace/namespace.component';
import { UserDatastoreComponent } from './user-datastore.component';
import { AppService } from './../../app.service';


describe('UserDatastoreComponent', () => {
  let component: UserDatastoreComponent;
  let fixture: ComponentFixture<UserDatastoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDatastoreComponent, NamespaceComponent ],
      providers: [ AppService ],
      imports: [RouterTestingModule,  HttpModule]
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
