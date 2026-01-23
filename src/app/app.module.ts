import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.modules';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StudentComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
