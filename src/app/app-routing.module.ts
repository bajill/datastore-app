import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent }  from './pages/about/about.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { HomeComponent } from './pages/home/home.component';

import { NamespaceComponent } from './namespace/namespace.component'

import { DatastoreComponent } from './pages/datastore/datastore.component';
import { UserDatastoreComponent } from './pages/user-datastore/user-datastore.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'datastore', component: DatastoreComponent },
      { path: 'userdatastore', component: UserDatastoreComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent},
      { path: 'namespace', component: NamespaceComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}