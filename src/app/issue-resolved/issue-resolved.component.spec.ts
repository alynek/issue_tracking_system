import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueResolvedComponent } from './issue-resolved.component';

describe('IssueResolvedComponent', () => {
  let component: IssueResolvedComponent;
  let fixture: ComponentFixture<IssueResolvedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueResolvedComponent]
    });
    fixture = TestBed.createComponent(IssueResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
