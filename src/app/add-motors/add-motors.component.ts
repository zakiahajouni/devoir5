import { Component, OnInit } from '@angular/core';
import { Motors } from '../model/motors.model';
import { MotorsService } from '../service/motors.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    selector:'add-motors',
    templateUrl:'./add-motors.component.html',
    styleUrls:['./add-motors.component.css'],
})
export class AddMotorsComponent implements OnInit {
newMotors = new Motors();
constructor(private activatedRoute: ActivatedRoute,
            private router :Router,
            private motorsService: MotorsService) { }
addMotors(){
    console.log(this.newMotors);
this.motorsService.ajouterMotors(this.newMotors);
this.router.navigate(['motors']);
}}