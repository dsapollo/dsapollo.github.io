import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectionErrorModal } from 'src/app/modules/shared/components/connection-error/connection-error.component';

@Component({
  selector: 'app-admin-landingpage',
  templateUrl: './admin-landingpage.component.html',
  styleUrls: ['./admin-landingpage.component.scss'],
})
export class AdminLandingpageComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [{ text: 'Admin' }];

  constructor() {}

  ngOnInit(): void {}
}
