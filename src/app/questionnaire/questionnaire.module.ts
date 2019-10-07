import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule, questionnaireRoutingComponents } from './questionnaire-routing.module';


@NgModule({
  declarations: [ questionnaireRoutingComponents],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
