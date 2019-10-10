import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametre-questionnaire',
  templateUrl: './parametre-questionnaire.component.html',
  styleUrls: ['./parametre-questionnaire.component.css']
})
export class ParametreQuestionnaireComponent implements OnInit {

  parametres = {};
  constructor() { }

  ngOnInit() {
  }

  enregistrer(){
    console.log("enregistrer les parametres.")
    window.location.replace('/questionnaire');
  }

  enregistrerEtAjouter(){
    console.log("enregistrer les parametres et ajouter les questions.")
    window.location.replace('/questionnaire/question/nouveau');
  }

}
