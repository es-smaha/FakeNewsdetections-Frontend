import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { TextComponent } from './text/text.component';
import { NltkComponent } from './nltk/nltk.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path : 'nltk' , component:NltkComponent},
  { path : 'texttest' , component:TextComponent},
  { path : 'news' , component:NewsComponent},
  { path : 'search' , component:SearchComponent},
  { path : 'aboutus' , component:AboutusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
