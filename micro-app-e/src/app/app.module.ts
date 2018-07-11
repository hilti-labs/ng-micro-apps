import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewAComponent } from './view-a/view-a.component';
import { ViewBComponent } from './view-b/view-b.component';
import { ViewCComponent } from './view-c/view-c.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ViewAComponent, ViewBComponent, ViewCComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ AppComponent ]
})
export class AppModule {
  constructor ( private injector: Injector ) { }

  ngDoBootstrap () {
    if ( !customElements.get( 'micro-app-e' ) ) {
      const appElement = createCustomElement( AppComponent, { injector: this.injector } );
      customElements.define( 'micro-app-e', appElement );
    }
  }
}
