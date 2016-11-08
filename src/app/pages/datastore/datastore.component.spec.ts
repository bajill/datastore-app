/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule} from '@angular/http';


import { DatastoreComponent } from './datastore.component';
import { NamespaceComponent } from './../../namespace/namespace.component';
import { AppService } from './../../app.service';


describe('DatastoreComponent', () => {
  let component: DatastoreComponent;
  let fixture: ComponentFixture<DatastoreComponent>;
  let appService: AppService;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastoreComponent, NamespaceComponent ],
      imports:[HttpModule],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
