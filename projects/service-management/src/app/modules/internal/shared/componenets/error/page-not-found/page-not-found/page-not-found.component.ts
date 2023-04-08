import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  @Input() type='general';
  @Input() message='';
  constructor() { }

  ngOnInit(): void {
  }

}
