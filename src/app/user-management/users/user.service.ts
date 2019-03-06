import { Injectable, EventEmitter } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserSelected = new EventEmitter<User>();

  private users: User[] = [
    {
      'id': '1',
      'firstName': 'John',
      'lastName': 'Doe',
      'password': 'dksjfkldsj',
      'email': 'John@gmail.com',
      'age': 45,
      'picturePath': 'JohnDoe.png',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      'id': '2',
      'firstName': 'Arthur',
      'lastName': 'Tony',
      'password': 'dksjfkldsj',
      'email': 'ArthurTony@gmail.com',
      'age': 50,
      'picturePath': 'ArthurTony.png',
      'description': 'Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. '
    },
    {
      'id': '3',
      'firstName': 'Edna',
      'lastName': 'Kaplensky',
      'password': 'dksjfkldsj',
      'email': 'IgorKap@gmail.com',
      'age': 30,
      'picturePath': 'EdnaKaplensky.png',
      'description': 'Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. '
    },
    {
      'id': '4',
      'firstName': 'Arthur',
      'lastName': 'Kaplensky',
      'password': 'dksjfkldsj',
      'email': 'ArthurKap@gmail.com',
      'age': 32,
      'picturePath': 'ArthurKaplensky.png',
      'description': 'ucibus orci luctus et ultrices posuere cubilia Curae'
    },
    {
      'id': '5',
      'firstName': 'Elton',
      'lastName': 'John',
      'password': 'dksjfkldsj',
      'email': 'EltonJohn@gmail.com',
      'age': 66,
      'picturePath': 'EltonJohn.png',
      'description': 'Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa.'
    }
  ];


  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(user: User) {
    let idx = 0;
    this.users.map( (userElem, index) => {
      if (user.id === userElem.id) {
        idx = index;
        console.log(idx);
      }
    } );
    this.users.splice(idx, 1);
  }
}
