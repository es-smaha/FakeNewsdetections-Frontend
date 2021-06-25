import { HttpLink } from 'apollo-angular/http';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Text, Opera } from 'src/app/types';

const allText = gql`
query {
  allText {
    id
    title
 		content
  }
}`;
const createOperation = gql`
mutation createOperation (
  $title : String!,
  $operationType:String!
){
  createOperation(
    title:$title,operationType:$operationType
  ){
    opera{
      result
    }
  }
}`;


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
   
    allT:Text[]=[];
    result:any;
    res:any;
    k:any;
    myOpera:any = {
      text:'',
      operationType:''

    }
  constructor(
    private apollo:Apollo,
    HttpLink:HttpLink
  ) { }
 

  ngOnInit(): void {
    
    this.apollo.watchQuery<any>({
      query:allText 
      
    }).valueChanges.subscribe(
     
      ({data,loading}) =>{
        console.log(loading);
      
        this.allT=data.allText;
      } )
   
  }

  	
	  public saveText(){
        this.apollo.mutate({
          mutation : createOperation,
          variables:{
           
              title : this.myOpera.text ,
              operationType:this.myOpera.operationType
            },
        }).subscribe(
        ({data}) =>
          {
            this.res=data
            this.result = this.res['createOperation']['opera']['result']
            console.log("test test  ")
            console.log(this.result)
          }, (error) => {
            console.log('Error : ' , error)
          }

        )
         
      }
  

  }


