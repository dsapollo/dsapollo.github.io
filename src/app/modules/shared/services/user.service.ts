import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  login(email: any, password: any) {
    return this.apollo.watchQuery<{ login: User }>({
      query: gql`
        query login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            id
            email
            mobile
            name
           password
           location
           usercode
           role
            
          } 
          
        }
      `,
      variables: { email, password },
    }).valueChanges;
  }

}
