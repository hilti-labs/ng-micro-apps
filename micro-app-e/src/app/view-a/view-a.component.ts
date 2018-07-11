import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-a',
  templateUrl: './view-a.component.html',
  styleUrls: ['./view-a.component.scss']
})
export class ViewAComponent implements OnInit {
  username = 'Pete..!';
  constructor ( private router: Router ) {
    this.router.initialNavigation();
   }

  ngOnInit() {
  }

}
