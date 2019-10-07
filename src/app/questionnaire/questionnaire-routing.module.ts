import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
// import { NouveauQuestionnaireComponent } from './nouveau-questionnaire/nouveau-questionnaire.component';


const routes: Routes = [
  { path: 'questionnaire', component: QuestionnaireComponent,

    children: [
    // { path: 'nouveau', component: NouveauQuestionnaireComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }

export const questionnaireRoutingComponents = [
  QuestionnaireComponent,
  // NouveauQuestionnaireComponent
];
