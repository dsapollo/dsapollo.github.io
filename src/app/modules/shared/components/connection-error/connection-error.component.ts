import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-connection-error',
  templateUrl: './connection-error.component.html',
  styleUrls: ['./connection-error.component.scss'],
})
export class ConnectionErrorModal implements OnInit {
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
