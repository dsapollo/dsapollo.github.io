import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Report } from '../model/report';
import { SearchOutputReportDto } from '../model/SearchReport';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private apollo: Apollo) {}

  getreport() {
    return this.apollo.watchQuery<{
      getAllReports: Report[];
    }>({
      query: gql`
        query getAllReports {
          getAllReports {
            id
            createdby
            createdon
            description
            email
            location
            location
            mobile
            postcode
            priority
            productname
            requesttype
            warranty
          }
        }
      `,
    }).valueChanges;
  }

  createReport(report: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($report: ReportDto) {
          createReport(reportDto: $report) {
            id
            createdby
            createdon
            description
            email
            location
            location
            mobile
            postcode
            priority
            productname
            requesttype
            warranty
          }
        }
      `,
      variables: { report },
    });
  }

  deleteReport(id: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($id: Int) {
          deleteReport(id: $id)
        }
      `,
      variables: { id },
    });
  }
  getTotalReportCount() {
    return this.apollo.watchQuery<{ getTotalReportCount: any }>({
      query: gql`
        query getTotalReportCount {
          getTotalReportCount
        }
      `,
    }).valueChanges;
  }

  searchReport(searchInput: any) {
    return this.apollo.watchQuery<{ searchReport: SearchOutputReportDto }>({
      query: gql`
        query searchReport($searchInput: SearchInputDto) {
          searchReport(searchInput: $searchInput) {
            count
            Reports {
              id
              createdby
              createdon
              description
              email
              location
              location
              mobile
              postcode
              priority
              productname
              requesttype
              warranty
            }
          }
        }
      `,
      variables: { searchInput },
    }).valueChanges;
  }

  getReportById(id: any) {
    return this.apollo.watchQuery<{ findByReportId: Report }>({
      query: gql`
        query ($id: Int) {
          findByReportId(id: $id) {
            id
            createdby
            createdon
            description
            email
            location
            location
            mobile
            postcode
            priority
            productname
            requesttype
            warranty
          }
        }
      `,
      variables: { id },
    }).valueChanges;
  }
}
