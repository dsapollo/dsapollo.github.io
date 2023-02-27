import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrls: ['./createlocation.component.scss'],
})
export class CreatelocationComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [
    { text: 'Location |Create Location' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
