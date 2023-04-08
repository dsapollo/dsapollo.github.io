import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Email } from '../models/email';



@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private apollo: Apollo) {}

  sendEmail(details:any) {
    return this.apollo.watchQuery<{ sendMail:String
    }>({
      query: gql`
        query sendMail($details:EmailDetails) {
            sendMail(details:$details) 
          }
        
      `,
      variables:{details}
    }).valueChanges;
  }

   sendMailWithAttachment(details:any) {
    return this.apollo.watchQuery<{ sendMailWithAttachment:String
    }>({
      query: gql`
        query sendMailWithAttachment($details:EmailDetails) {
            sendMailWithAttachment(details:$details) {
          }
        }
      `,
      variables:{details}
    }).valueChanges;
  }


}
