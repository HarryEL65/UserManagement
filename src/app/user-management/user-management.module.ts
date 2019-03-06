import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user-list/user/user.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    NgxDatatableModule,
    FormsModule,
    NgbModule.forRoot(),
    CommonModule
  ],
  declarations: [
                 UsersComponent,
                 UserDetailsComponent,
                 UserListComponent,
                 UserComponent,
                 NewUserComponent
                ],

  exports: [
            NgxDatatableModule,
            UsersComponent,
            UserDetailsComponent,
            UserListComponent,
            UserComponent,
            NewUserComponent
          ]
})
export class UserManagementModule { }
