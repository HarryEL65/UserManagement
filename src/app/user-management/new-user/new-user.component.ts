import { UserService } from './../users/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../users/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exam-hrmn-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  model: any = {};
  users: User[];
  isShown = false;

  constructor(public userSrv: UserService) { }

  ngOnInit() {

  }

  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.userSrv.addUser(this.model);
    this.isShown = false;
  }

}
