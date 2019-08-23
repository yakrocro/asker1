import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ident-form',
  templateUrl: './ident-form.component.html',
  styleUrls: ['./ident-form.component.css']
})
export class IdentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  afficher(name:string){
    console.log('you are my hero ' + name);
  }

}
