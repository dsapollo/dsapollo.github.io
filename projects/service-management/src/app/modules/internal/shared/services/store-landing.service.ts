import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ConfigurableLabelDetail } from '../models/ConfigurableLabel';


@Injectable({
  providedIn: 'root'
})
export class StoreLandingService {

  showLandingInfo:boolean=true;

  constructor(private apollo:Apollo) { }

  getAllLabel(){
    return this.apollo.watchQuery<{
      getAllLabel:ConfigurableLabelDetail[];
    }>({
      query:gql`
      query getAllLabel{
        getAllLabel{
        id
        name
        desc
        active
        imageUrl
      }
    }
    `,

    }).valueChanges;
    }
  }

