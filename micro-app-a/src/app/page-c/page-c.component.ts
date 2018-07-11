import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.scss']
})
export class PageCComponent implements OnInit {
  username = 'Pete..!';
  constructor() { }

  ngOnInit() {
  }
}
