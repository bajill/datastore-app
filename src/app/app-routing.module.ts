import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { NamespaceComponent } from './namespace/namespace.component';
import { DatastoreComponent } from './pages/datastore/datastore.component';
import { UserDatastoreComponent } from './pages/user-datastore/user-datastore.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'datastore', component: DatastoreComponent },
      { path: 'userdatastore', component: UserDatastoreComponent },
      { path: 'overview', component: OverviewComponent },
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
