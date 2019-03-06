import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exam-hrmn-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ UserService ]
})
export class UsersComponent implements OnInit {

  selectedUser: User;
  avatarPath = '../../../../assets/images/avatars/';


  constructor(private userSrv: UserService) { }

  ngOnInit() {
    this.userSrv.UserSelected.subscribe(
      (user: User) => {
        this.selectedUser = user;
      }
    );
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        // : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
        : this.userSrv.getUsers().filter(v => v.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {firstName: string}) => x.firstName;


}
