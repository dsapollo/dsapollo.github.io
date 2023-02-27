import { Component, OnInit } from '@angular/core';
import { Report } from '../../model/report';
import { ReportService } from '../../services/report.service';
import  * as XLSX from 'xlsx';

@Component({
  selector: 'app-downloadreport',
  templateUrl: './downloadreport.component.html',
  styleUrls: ['./downloadreport.component.scss']
})
export class DownloadreportComponent implements OnInit {
  fileName='Report.xls'
  reports:Report[]=[];
  constructor(private reportservice:ReportService) { }

  ngOnInit(): void {
    this.getAllReports();
  }

  getAllReports(){
    this.reportservice.getreport().subscribe((result)=>{
      this.reports=result.data.getAllReports;
      console.log('Report',this.reports=result.data.getAllReports);
    })
  }

  exportexcel():void{
    let element =document.getElementById('excel-table');
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook =XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    XLSX.writeFile(wb,this.fileName);
      
  }
}
