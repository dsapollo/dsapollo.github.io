import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReportService } from '../../services/report.service';

import FileSaver, { saveAs } from 'file-saver';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [{ text: 'Reporting' }];
  // selectedReport:string=''
  reportingForm: FormGroup = new FormGroup({});
  //fileName = 'location.xls';
  selectedReport: string = '';
  downloadUrl: string = '';

  location = 'location.xls';
  order = 'order.xls';
  myorder = 'myorder.xls';
  srs = 'srs.xls';
  filename = 'Location.xls';
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {}

  selectReport(event: any) {
    this.selectedReport = event.target.value;
    this.downloadUrl='https://report-svc.onrender.com/'+this.selectedReport;
  }

  // downloadReport(): void {
  //   console.log('reprot',this.selectedReport)
  //   switch (this.selectedReport) {
  //     case 'order': {
  //       this.downloadUrl
  //       break;
  //     }
  //     case 'myorder': {
  //       this.reportService.downloadmyorder();
  //       break;
  //     }
  //     case 'location': {
  //       console.log('nanda')
  //       this.reportService.downloadlocation();
  //       break;
  //     }
  //     case 'srs': {
  //       this.reportService.downloadsrs();
  //       break;
  //     }
  //   }
  // }

  //   downloadReport(filename:string):void{
  //     this.reportService
  //     .downloadLocation()
  //     .subscribe(blob => saveAs(blob, filename));

  // }

  // downloadReport(){
  //   FileSaver.saveAs(
  //     this.reportService.downloadReport,this.selectedReport
  //   )
  // }
}
