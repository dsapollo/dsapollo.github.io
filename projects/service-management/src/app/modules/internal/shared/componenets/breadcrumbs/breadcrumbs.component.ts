import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() pages: { path?: string; text: string }[] = [];
  constructor(private location: Location) {}

  ngOnInit(): void {}

  goToPreviousPage() {
    this.location.back();
  }
}