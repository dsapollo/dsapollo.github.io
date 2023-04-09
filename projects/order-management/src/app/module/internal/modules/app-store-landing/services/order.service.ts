import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
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
    productcode
    category
    description
    price
    imageUrl
    count
    rate
           
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

  findById(id: any) {
    return this.apollo.watchQuery<{ findById: Product }>({
      query: gql`
        query ($id: Int) {
          findById(id: $id) {
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
      variables: { id },
    }).valueChanges;
  }
}
