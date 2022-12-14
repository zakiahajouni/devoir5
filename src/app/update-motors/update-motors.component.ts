import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MotorsService } from '../service/motors.service';
import { Motors } from '../model/motors.model';
@Component({
  selector: 'app-update-motors',
  templateUrl: './update-motors.component.html',
  styleUrls: ['./update-motors.component.css']
})
export class UpdateMotorsComponent implements OnInit {
  currentMotors = new Motors();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private motorsService: MotorsService) { }

  ngOnInit(): void {
    this.currentMotors = this.motorsService.consulterMotors(this.activatedRoute.snapshot. params['id']);
console.log(this.currentMotors);
  }
  
  updateMotors()
  {
   //console.log(this.currentMotors);
   this.motorsService.updateMotors(this.currentMotors);
this.router.navigate(['motors']);

  }
}
