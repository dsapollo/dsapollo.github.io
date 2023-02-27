import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ProductList } from '../model/productlist';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private apollo: Apollo) {}

  findAll() {
    return this.apollo.watchQuery<{
      getAllProductList: ProductList[];
    }>({
      query: gql`
        query getAllProductList {
          getAllProductList {
            id
            productname
            productcode
            producttype
            price
            description
            imageurl
          }
        }
      `,
    }).valueChanges;
  }
}
