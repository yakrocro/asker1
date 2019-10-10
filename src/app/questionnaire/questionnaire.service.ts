import { Injectable } from '@angular/core';
import { Questionnaire } from './questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  questionnaire: Questionnaire ;

  constructor(
    public questionnaire: Questionnaire
  ) {

  }

  getQuestionnaireList(){
    
  }

}
