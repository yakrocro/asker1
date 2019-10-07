import { Reponse } from './reponse';

export class Question {
  numero: number ;
  libelle: string ;
  commentaire: string ;
  point: number ;
  reponse: Reponse ;

  public constructor( numero: number, libelle: string, commentaire: string,
    point: number, reponse: Reponse ) {

    this.numero = numero ;
    this.libelle = libelle ;
    this.commentaire = commentaire ;
    this.point = point ;
    this.reponse = reponse ;
    
  }
}
