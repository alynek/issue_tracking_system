import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueReportComponent } from './issue-report/issue-report.component';
import { IssueResolvedComponent } from './issue-resolved/issue-resolved.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    IssueResolvedComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
