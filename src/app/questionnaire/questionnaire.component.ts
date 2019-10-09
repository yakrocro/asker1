import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questionnaires: string[] = [];
  messageVide ="No questionnaire created.";

  constructor(
    // private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    var list = localStorage;
    // console.log("questionnaires = " + list.getItem("questionnaires") );
    // if(window.localStorage.getItem("questionnaires").length > 0) {
    //   this.questionnaires.push(list);
    // }
    if(list.length === 0 || list.getItem("questionnaires") === null) {
      // console.log("questionnaires 1 = " + JSON.parse(list.getItem("questionnaires")) );
      console.log("pas de questionnaires créé..");
      localStorage.setItem("questionnaires", JSON.stringify(this.questionnaires));
      // console.log("questionnaires 2 = " + JSON.parse(list.getItem("questionnaires")) );
    } else {
      // list = localStorage;
      console.log("questionnaires = " + list.getItem("questionnaires") );
    }
    // localStorage.clear();


  }

  // all() {
  //   if( this.questionnaires.length > 0 ) {
  //   }
  // }

  enregistrer(){

  }

}
