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


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isConnected = false;
  cont:any = {
    title:'',
    content:''
   

  }
  queryText:string ="";
  
  contentSources:ContentSource[]=[];
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
  }


  
  search($event) {
    if ($event.timeStamp - this.lastKeypress > 100) {
      this.queryText = $event.target.value;

    this.queryText = $event.target.value;

    this.es.fullTextSearch('news','_doc','content', this.queryText).then(
      response => {
        this.contentSources= response.hits.hits;
        console.log(response);
        console.error("mia");

      }, error => {
        console.error(error);
        console.error("erreur");

      }).then(() => {
        console.log('Search Completed!');
      });
  }
  this.lastKeypress = $event.timeStamp;
}

}
