import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ReportService {
  report_svc='https://report-svc.onrender.com/';
 // report_svc='http://localhost:8011/';
  constructor(private http:HttpClient) {}


  // downloadReport():Observable<Blob>{
  //   return this.http.get(`${this.report_svc}`,{
  //     responseType:'blob',
  //   });
  // }

  // downloadReports():{


  // }


  downloadlocation() {
    return this.http.get(`${this.report_svc+'location'}`).subscribe((res)=>{})
     }

  downloadorder(){
    return this.http.get(`${this.report_svc+'order'}`).subscribe((res)=>{})
     }
downloadmyorder(): Observable<any> {
  return this.http.get(`${this.report_svc+'myorder'}`) 
     }

  downloadsrs(): Observable<any> {
    return this.http.get(`${this.report_svc+'srs'}`) 
  }


    
  

  // sendMail(): Observable<any> {
  //   return this.http.get(`${this.report_svc+'sendMail'}`    
  // )}


  


 
}
