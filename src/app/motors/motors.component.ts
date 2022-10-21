import { Component, OnInit } from '@angular/core';
import { Motors } from '../model/motors.model';
import { MotorsService } from '../service/motors.service';
@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.css'],
})
export class MotorsComponent implements OnInit {
  motors : Motors []; 
      constructor(private motorsService: MotorsService ) {
      this.motors = motorsService.listeMotors();
      }
      ngOnInit(): void { 
      }
      supprimerMotors(m: Motors)
      {
     //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.motorsService.supprimerMotors(m);
    }
    }