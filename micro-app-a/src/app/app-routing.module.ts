import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';

const routes: Routes = [
  { path: 'micro-app-a/page-a', component: PageAComponent },
  { path: 'micro-app-a/page-b', component: PageBComponent },
  { path: 'micro-app-a/page-c', component: PageCComponent },
  { path: '**', component: PageAComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, { enableTracing: true, useHash: true } ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
