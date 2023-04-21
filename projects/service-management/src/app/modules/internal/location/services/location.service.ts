import { Injectable } from '@angular/core';
import { gql } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { SearchLocationOutputDto } from '../models/SearchLocation';
import { Location } from '../models/location';





@Injectable({
  providedIn: 'root',
})
export class LocationService {

  constructor(private apollo: Apollo) {}

  getLocation() {
    return this.apollo.watchQuery<{
      getAllLocations: Location[];
    }>({
      query: gql`
        query getAllLocations {
          getAllLocations {
            id
            location
            locationtype
            locationstatus
            address
            createdon
            createdby
            email
            citytown
            country
            postcode
          }
        }
      `,
    }).valueChanges;
  }
  createLocation(location: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($location: LocationDto) {
          createLocation(locationDto: $location) {
            id
            location
            locationtype
            locationstatus
            address
            createdon
            createdby
            email
            citytown
            country
            postcode
          }
        }
      `,
      variables: { location },
    });
  }
  deleteLocation(id: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($id: Int) {
          deleteLocation(id: $id)
        }
      `,
      variables: { id },
    });
  }

  getTotalLocationCount() {
    return this.apollo.watchQuery<{ getTotalLocationCount: any }>({
      query: gql`
        query getTotalLocationCount {
          getTotalLocationCount
        }
      `,
    }).valueChanges;
  }

  findByLocationId(id: any) {
    return this.apollo.watchQuery<{ findByLocationId: Location }>({
      query: gql`
        query ($id: Int) {
          findByLocationId(id: $id) {
            id
            location
            locationtype
            locationstatus
            address
            createdon
            createdby
            email
            citytown
            country
            postcode
          }
        }
      `,
      variables: { id },
    }).valueChanges;
  }

  searchLocation(searchInput: any) {
    return this.apollo.watchQuery<{ searchReport: SearchLocationOutputDto }>({
      query: gql`
      query searchLocation($searchInput:SearchInputDto)
      searchLocation(searchInput: $searchInput){
        count
        location{
          id
          citytown
          address
          country
          createdby
          email
          createdon
          location
          locationstatus
          locationtype
        }
      }
    }
    `,
      variables: { searchInput },
    }).valueChanges;
  }
}
