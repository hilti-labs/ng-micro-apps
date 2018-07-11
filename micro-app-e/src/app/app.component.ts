import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = 'micro-app-e';
  constructor ( private router: Router ) {
    this.router.initialNavigation();
  }
}
