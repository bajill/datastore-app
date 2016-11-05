import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent }  from './pages/about/about.component';
import { AppComponent }  from './app.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'statistics', component: StatisticsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}