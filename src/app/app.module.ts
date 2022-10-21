import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorsComponent } from './motors/motors.component';
import { AddMotorsComponent } from './add-motors/add-motors.component';
import { FormsModule } from '@angular/forms';
import { UpdateMotorsComponent } from './update-motors/update-motors.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorsComponent,
    AddMotorsComponent,
    UpdateMotorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
