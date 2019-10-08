import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionComponent } from './question/question.component';
import { NouveauQuestionnaireComponent } from './questionnaire/nouveau-questionnaire/nouveau-questionnaire.component';
import { IdentFormComponent } from './ident-form/ident-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', component: IdentFormComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'questionnaire', component: QuestionnaireComponent,
    // loadChildren: () => import('./questionnaire/questionnaire.module').then(mod => mod.QuestionnaireModule)
  },
  { path: 'questionnaire/nouveau', component: NouveauQuestionnaireComponent },
  { path: 'questionnaire/question/nouveau', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  IdentFormComponent,
  RegistrationFormComponent,
  UserListComponent,
  NouveauQuestionnaireComponent,
  QuestionComponent
]
