import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getTrueData = gql`
  query dataTrue(
    allText {
      id
      title
      content
    }
    }
  }`
@Injectable({
  providedIn: 'root'
})
export class TextserviceService {

  constructor(  
    private apollo: Apollo,
    private http: HttpClient
    ) { }
    getText(){
      return this.apollo.query({
        query: getTrueData,
        
      })
    }
}
