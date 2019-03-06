import { UserService } from './../../user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exam-hrmn-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  public model: any;
  avatarPath = '../../../../assets/images/avatars/';


  constructor(private userSrv: UserService) { }

  ngOnInit() {
  }

  onSelected() {
    this.userSrv.UserSelected.emit(this.user);
  }

  remove() {
    this.userSrv.removeUser(this.user);
  }



}
