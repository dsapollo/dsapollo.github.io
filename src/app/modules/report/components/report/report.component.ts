import {
  AfterContentChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';
import { Report } from '../../model/report';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit, AfterContentChecked {
  @ViewChild('tableContent', { read: ElementRef })
  public tableElement!: ElementRef<any>;
  tableReference: any;
  count: string | number = '';
  reports: Report[] = [];
  constructor(
    private router: Router,
    private reportservice: ReportService,
    private confirmService: NgConfirmService,
    private toast: ToastrService,
    private Actroute: ActivatedRoute
  ) {}

  ngAfterContentChecked(): void {
    this.tableReference = this.tableElement;
  }
  fileName = 'Report.xls';
  ngOnInit(): void {
    this.getAllReports();
    this.getTotalReportCount();
  }

  viewreport(reportId: number) {
    this.router.navigate(['report', 'viewreport', reportId]);
  }

  getAllReports() {
    this.reportservice.getreport().subscribe((result) => {
      this.reports = result.data.getAllReports;
    });
  }

  deleteReport(id: any) {
    this.confirmService.showConfirm(
      'Are You Sure Wants To Delete?',
      () => {
        this.reportservice.deleteReport(id).subscribe(() => {
          this.toast.success('Deleted successfully!!!');
          this.getAllReports();
        });
      },
      () => {}
    );
  }

  searchText: any | null;
  searchCount = 0;

  searchReport() {
    this.reportservice
      .searchReport({
        searchText: this.searchText,
        page: 1,
        pageSize: 10,
      })
      .subscribe((res) => {
        this.reports = res.data.searchReport.reports;
        this.searchCount = res.data.searchReport.count;
      });
  }

  downloadreport() {
    this.router.navigate(['report', 'downloadreport']);
  }

  getTotalReportCount() {
    this.reportservice.getTotalReportCount().subscribe(({ data }) => {
      this.count = data.getTotalReportCount;
      console.log('report', (this.count = data.getTotalReportCount));
    });
  }
}
