import { UserManagementModule } from './user-management/user-management.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
