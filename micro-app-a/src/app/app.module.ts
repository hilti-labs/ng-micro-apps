import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ AppComponent ]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor ( private injector: Injector ) { }

  ngDoBootstrap () {
    if ( !customElements.get( 'micro-app-a' ) ) {
      const appElement = createCustomElement( AppComponent, { injector: this.injector } );
      customElements.define( 'micro-app-a', appElement );
    }
  }
}
