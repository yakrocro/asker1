import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentFormComponent } from './ident-form/ident-form.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', component: IdentFormComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'users', component: UserListComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
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
  QuestionnaireComponent,
]
