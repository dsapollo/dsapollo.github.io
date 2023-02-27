import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Location } from 'src/app/modules/location/model/Location';
import { LocationService } from 'src/app/modules/location/services/location.service';
import { ProductList } from 'src/app/modules/order/model/productlist';
import { OrderService } from 'src/app/modules/order/services/order.service';
import { User } from 'src/app/modules/shared/models/user';
import { Report } from '../../model/report';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss'],
})
export class CreateReportComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [{ text: 'Create Reports' }];

  report: Report = new Report();

  constructor(
    private formbuilder: FormBuilder,
    private reportservice: ReportService,
    private toast: ToastrService,
    private router: Router,
    private orderService: OrderService,
    private locationservice: LocationService
  ) {}

  products: ProductList[] = [];
  location: Location[] = [];

  ngOnInit(): void {
    this.getAllReports();
    this.getAllproduct();
    this.getAllLocations();
  }

  public reportForm: FormGroup = this.formbuilder.group({
    email: ['', [Validators.email, Validators.required]],
    productname: ['', [Validators.required]],
    requesttype: ['', [Validators.required]],
    description: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    postcode: ['', [Validators.required]],
    createdon: ['', [Validators.required]],
    createdby: ['', [Validators.required]],
    warranty: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    location: ['', [Validators.required]],
  });
  user!: User;
  reports: Report[] = [];
  createReport() {
    this.report.createdby = this.reportForm.value.createdby;
    this.report.email = this.reportForm.value.email;
    this.report.productname = this.reportForm.value.productname;
    this.report.requesttype = this.reportForm.value.requesttype;
    this.report.description = this.reportForm.value.description;
    this.report.priority = this.reportForm.value.priority;
    this.report.postcode = this.reportForm.value.postcode;
    this.report.createdby = this.reportForm.value.createdby;
    this.report.warranty = this.reportForm.value.warranty;
    this.report.mobile = this.reportForm.value.mobile;
    this.report.location = this.reportForm.value.location;
    this.reportservice.createReport(this.report).subscribe(() => {
      this.toast.success('Dear User Report is Created');
      this.router.navigate(['report']);
      this.getAllReports();
    });
  }

  getAllReports() {
    this.reportservice.getreport().subscribe((result) => {
      this.reports = result.data.getAllReports;
      console.log('Report', (this.reports = result.data.getAllReports));
    });
  }
  getAllproduct() {
    this.orderService.findAll().subscribe((result) => {
      this.products = result.data.getAllProductList;
      console.log('product');
    });
  }

  getAllLocations() {
    this.locationservice.getLocation().subscribe((result) => {
      this.location = result.data.getAllLocations;
    });
  }
}
