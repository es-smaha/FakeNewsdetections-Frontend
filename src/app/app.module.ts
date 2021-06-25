import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextComponent } from './text/text.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NltkComponent } from './nltk/nltk.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NewsComponent } from './news/news.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ElasticsearchService } from './elasticsearch.service';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    NavbarComponent,
     NltkComponent,
    NewsComponent,
    SearchComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    NgxPaginationModule
  ],
  providers: [ElasticsearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
 

 }
