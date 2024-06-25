import { Injectable } from '@angular/core'
import {Issue} from './issue'

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private issues: Issue[] = []

  constructor() { }

  getPendingIssues(): Issue[]{
    return this.issues.filter(_ => !_.completed)
  }

  //TODO: generate random numbers issue
  createIssue(issue: Issue){
    issue.issueNumber = this.issues.length + 1
    this.issues.push(issue)
  }
}
