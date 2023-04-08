import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { SR } from '../models/sr';
import { SearchOutputSrDto } from '../models/SearchSr';



@Injectable({
  providedIn: 'root',
})
export class SrService {
  constructor(private apollo: Apollo) {}

  getAllSr() {
    return this.apollo.watchQuery<{
      getAllSr: SR[];
    }>({
      query: gql`
        query getAllSr {
          getAllSr {
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

  createSr(srDto: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($srDto: SrDto) {
          createSr(srDto: $srDto ) {
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
      variables: { srDto },
    });
  }

  deleteSr(id: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($id: Int) {
          deleteSr(id: $id)
        }
      `,
      variables: { id },
    });
  }
  getTotalSrCount() {
    return this.apollo.watchQuery<{ getTotalSrCount: any }>({
      query: gql`
        query getTotalSrCount {
          getTotalSrCount
        }
      `,
    }).valueChanges;
  }

  searchSr(searchInput: any) {
    return this.apollo.watchQuery<{ searchSr: SearchOutputSrDto }>({
      query: gql`
        query searchSr($searchInput: SearchInputDto) {
          searchSr(searchInput: $searchInput) {
            count
            Sr {
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

  getSrById(id: any) {
    return this.apollo.watchQuery<{ findBySrId: SR }>({
      query: gql`
        query ($id: Int) {
          findBySrId(id: $id) {
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
