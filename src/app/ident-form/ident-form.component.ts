import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ident-form',
  templateUrl: './ident-form.component.html',
  styleUrls: ['./ident-form.component.css']
})
export class IdentFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  afficher(name:string){
    console.log('you are my hero ' + name);
  }

}
