import { Reference } from './reference';

export class Reponse {
  numero: number ;
  type: string[] = ["ChoixMultiple", "Fermé", "Ouvert"];
  commentaire: string ;
  note: number ; 
  reference: Reference ;
}
