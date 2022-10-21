import { Injectable } from '@angular/core';
import { Motors } from '../model/motors.model';
@Injectable({
providedIn: 'root'
})
export class MotorsService {
  motors : Motors[]; //un tableau de Motors

  motor! : Motors;
  
constructor() {
this.motors = [
{ idMotors: 1, 
  nomMotors : "Kawasaki Z 1000", 
  prixMotors : 400.600, dateCreation: 
  new Date("02/07/1997")},
{ idMotors : 2, 
  nomMotors : "BMW R100S", 
  prixMotors : 300.112, 
  dateCreation : new Date("03/01/2000")},
{ idMotors : 3, 
  nomMotors :"Harley-Davidson Low Rider",
   prixMotors :  600.720,
    dateCreation : new Date("09/04/2014")},
{ idMotors : 4, 
  nomMotors :" tmax530", 
  prixMotors :  500.720, 
  dateCreation : new Date("08/04/2012")}
];
}
listeMotors():Motors[] {
  return this.motors;
}
ajouterMotors( moto: Motors){
this.motors.push(moto);
}
supprimerMotors( m: Motors){
  //supprimer le produit prod du tableau produits
  const index = this.motors.indexOf(m, 0);
  if (index > -1) {
  this.motors.splice(index, 1);
  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  }
  consulterMotors(id:number): Motors{
    this.motor = this.motors.find(m => m.idMotors == id)!;
    return this.motor;
    }
    updateMotors(m:Motors)
{
// console.log(p);
this.supprimerMotors(m);
this.ajouterMotors(m);
this.trierMotors();
}
trierMotors(){
  this.motors = this.motors.sort((n1,n2) => {
  if (n1.idMotors! > n2.idMotors!) {
  return 1;
  }
  if (n1.idMotors! < n2.idMotors!) {
  return -1;
  }
  return 0;
  });
  }}