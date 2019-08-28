import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questionnaires = [];
  messageVide ="No questionnaire created.";

  constructor(
    // private route:ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  all() {
    if( this.questionnaires.length > 0 ) {
    }
  }

}
