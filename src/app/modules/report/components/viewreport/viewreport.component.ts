import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Report } from '../../model/report';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.scss'],
})
export class ViewreportComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [
    { text: 'Report | ViewReports' },
  ];

  reports: Report[] = [];
  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) {}
  reportId!: number;
  report?: Report;

  ngOnInit(): void {
    this.getReportId();
  }

  getReportId() {
    this.route.params.subscribe({
      next: (params) => {
        this.reportId = params['reportId'];
        console.log('Router', this.reportId);
        if (this.reportId) {
          this.getReportById(Number(this.reportId));
        }
      },
    });
  }
  getReportById(id: number) {
    this.reportService.getReportById(id).subscribe((res) => {
      this.report = res.data.findByReportId;
    });
  }
}
