import { User } from './../user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exam-hrmn-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  @ViewChild('tableUsers') tableWrapper;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private userSrv: UserService) { }

  ngOnInit() {
    this.users = this.userSrv.getUsers();
  }


}
