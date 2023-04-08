import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getuser() {
    return this.apollo.watchQuery<{
      getAllUsers: User[];
    }>({
      query: gql`
        query getAllUsers {
          getAllUsers {
            id
            email
            address
            fullname
            firstname
            lastname
            location
            role
            usercode
            status
            mobile
            postcode
          }
        }
      `,
    }).valueChanges;
  }

  deleteUser(id: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($id: Int) {
          deleteUser(id: $id)
        }
      `,
      variables: { id },
    });
  }

  findUserByEmail(email: any) {
    return this.apollo.watchQuery<{
      findByEmail: User
    }>({
      query: gql`
        query findByEmail($email: String!) {
          findByEmail(email: $email) {
            id
            email
            address
            fullname
            firstname
            lastname
            location
            role
            usercode
            status
            mobile
            postcode
          }
        }
      `,
      variables: { email },
    }).valueChanges;
  }
}
