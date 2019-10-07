import { Question } from '../question/question';

export class Questionnaire {
  nombre: number ;
  ordre: string ;
  afficherEvolution: boolean ;
  questions: Question[] ;
}
