import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueModule } from './issue/issue.module';
import { WikiModule } from './wiki/wiki.module';

import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';

import { pagesRouting, pagesRoutingProviders }  from './pages.routes';

@NgModule({
  imports: [
    CommonModule,
    IssueModule,
    WikiModule,
    pagesRouting
  ],
  providers: [pagesRoutingProviders],
  declarations: [
    PagesComponent,
    TopComponent
  ]
})
export class PagesModule { }


