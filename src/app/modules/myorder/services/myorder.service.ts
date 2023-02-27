import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class MyorderService {
  constructor(private apollo: Apollo) {}

  getProducts() {
    return this.apollo.watchQuery<{
      getProducts: Product[];
    }>({
      query: gql`
        query getProducts {
          getProducts {
            id
            productname
            producttype
            createdby
            address
            email
            mobile
            productcode
            postcode
            quantity
          }
        }
      `,
    }).valueChanges;
  }

  getTotalOrderProductCount() {
    return this.apollo.watchQuery<{ getTotalOrderProductCount: any }>({
      query: gql`
        query getTotalOrderProductCount {
          getTotalOrderProductCount
        }
      `,
    }).valueChanges;
  }
}
