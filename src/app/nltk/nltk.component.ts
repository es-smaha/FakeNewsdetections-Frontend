import { HttpLink } from 'apollo-angular/http';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Text, Opera } from 'src/app/types';



const createFake = gql`
mutation createFake (
  $content : String!,
  $opr: String!,
 
){
  createFake(
    content:$content,
  ){
    opera{
      content
      result
      opr
    }
  }
}`;

@Component({
  selector: 'app-nltk',
  templateUrl: './nltk.component.html',
  styleUrls: ['./nltk.component.css']
})
export class NltkComponent implements OnInit {

   
 
  result:any;
  output:any;

  res:any;
  k:any;
  myOpera:any = {
    content:'',
    op:''
   

  }

  constructor(

    private apollo:Apollo,
    HttpLink:HttpLink
  ) { }

  ngOnInit(): void {
  }

  
	  public saveText(){
        this.apollo.mutate({
          mutation : createFake,
          variables:{
           
              content : this.myOpera.content ,
               op:'0'  //indique le choix soit du sentiment et du fake news 
             
            },
        }).subscribe(
        ({data}) =>
          {
            this.res=data
            this.result = this.res['createFake']['opera']['result']

            if (this.result==1) 
            {
               this.output="c'est une Vrai Information sur Covid-19"
            }

            if (this.result==0) {
              this.output="c'est une Fausses Information sur Covid-19"
              
              } 
                console.log("je suis la ")
            console.log(this.result)
          }, (error) => {
            console.log('Error : ' , error)
          }

        )
         
      }

    public sentiment(){
          this.apollo.mutate({
            mutation : createFake,
            variables:{
            content : this.myOpera.content ,
            op:'1'               
              },
          }).subscribe(
          ({data}) =>
            {
              this.res=data
              this.result = this.res['createFake']['opera']['result']
  
              if (this.result==0) 
              {
                 this.output="positive"
              }
  
              if (this.result != 0) {
                this.output="negative"
                
                } 
                
              console.log(this.result)
            }, (error) => {
              console.log('Error : ' , error)
            }
  
          )
           
        }
  
}
