import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from '../models/User';


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
            Lobs
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
            Lobs
            mobile
            postcode
          }
        }
      `,
      variables: { email },
    }).valueChanges;
  }
}

export enum Lobs
{
  ADMIN=0,
  USER=1,
  Any=2,
}

export type Lob=Lobs;
