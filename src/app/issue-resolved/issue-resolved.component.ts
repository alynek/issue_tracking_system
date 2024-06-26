import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-issue-resolved',
  templateUrl: './issue-resolved.component.html',
  styleUrls: ['./issue-resolved.component.css']
})
export class IssueResolvedComponent {
  @Input() issueNumber: number | null = null
  @Output() confirm = new EventEmitter<boolean>()

  agree(){
    this.confirm.emit(true)
    this.issueNumber = null
  }

  disagree(){
    this.confirm.emit(false)
    this.issueNumber = null
  }
}
