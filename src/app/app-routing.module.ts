import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentFormComponent } from './ident-form/ident-form.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';


const routes: Routes = [
  { path: '', component: IdentFormComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
