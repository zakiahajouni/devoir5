import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorsComponent } from './motors/motors.component';
import { AddMotorsComponent } from './add-motors/add-motors.component';
import { UpdateMotorsComponent } from './update-motors/update-motors.component';

const routes: Routes = [{path: "motors", component : MotorsComponent},
                        {path: "add-motors", component : AddMotorsComponent},
                         {path: "", redirectTo: "motors", pathMatch: "full" },
                         {path: "updateMotors/:id", component: UpdateMotorsComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
