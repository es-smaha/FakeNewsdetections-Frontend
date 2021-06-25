import { HttpLink } from 'apollo-angular/http';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Component, OnInit ,  ChangeDetectorRef} from '@angular/core';
import gql from 'graphql-tag';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Text, Opera, News } from 'src/app/types';
import { ElasticsearchService } from '../elasticsearch.service';
import {Content , ContentSource  } from 'src/app/search';

const allNews= gql`
query {
  allNews {
    id
    title
   	content
    classe
   
  }
}`;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  allN:News[]=[];
  isConnected = false;
  status: string = "";
  queryText:string ="";
  new:any;

  lastKeypress = 0;

  constructor(
    private apollo:Apollo,
    HttpLink:HttpLink,
    private es: ElasticsearchService, private cd: ChangeDetectorRef
  ) {
    this.queryText = '';
   }
  totalLength:any;
  page:number=1

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query:allNews 
      
    }).valueChanges.subscribe(
     
      ({data,loading}) =>{
        console.log(loading);
      
        this.allN=data.allNews;
        this.totalLength=this.allN.length
      } )


      // elastc search
      this.es.isAvailable().then(() => {
        this.status = 'OK';
        this.isConnected = true;
      }, error => {
        this.status = 'SUCCESS';
        this.isConnected = false;
        console.error('Server is down', error);
      }).then(() => {
        this.cd.detectChanges();
      });
  }
}

