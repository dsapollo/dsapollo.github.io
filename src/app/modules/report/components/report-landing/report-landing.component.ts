import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Report } from '../../model/report';

@Component({
  selector: 'app-report-landing',
  templateUrl: './report-landing.component.html',
  styleUrls: ['./report-landing.component.scss'],
})
export class ReportLandingComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [{ text: 'Reports' }];

  report: Report = new Report();
  createReport!: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  createreport() {
    this.router.navigate(['report', 'createreport']);
  }
}
