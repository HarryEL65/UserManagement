import { User } from './../user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exam-hrmn-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User;
  avatarPath = '../../../../assets/images/avatars/';
  constructor() { }

  ngOnInit() {

  }

}
