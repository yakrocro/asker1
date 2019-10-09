import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-questionnaire',
  templateUrl: './nouveau-questionnaire.component.html',
  styleUrls: ['./nouveau-questionnaire.component.css']
})
export class NouveauQuestionnaireComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nouvelleQuestion() {
    console.log("ajouter une nouvelle question.");
    window.location.replace('/questionnaire/question/nouveau');

  }

  parametres() {
    console.log("ajouter une nouvelle question.");
    window.location.replace('/questionnaire/parametres');
  }

  enregistrer() {
    
  }

}
