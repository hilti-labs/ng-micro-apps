import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAComponent } from './view-a/view-a.component';
import { ViewBComponent } from './view-b/view-b.component';
import { ViewCComponent } from './view-c/view-c.component';

const routes: Routes = [
  { path: 'micro-app-e/view-a', component: ViewAComponent },
  { path: 'micro-app-e/view-b', component: ViewBComponent },
  { path: 'micro-app-e/view-c', component: ViewCComponent },
  { path: 'micro-app-e/**', component: ViewAComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes, { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
