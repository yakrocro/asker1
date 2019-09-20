import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-ident-form',
  templateUrl: './ident-form.component.html',
  styleUrls: ['./ident-form.component.css']
})
export class IdentFormComponent implements OnInit {

  userModel = new User('juju', 'juju@email.com', 'mdp');

  constructor() { }

  ngOnInit() { }

  onSubmit(){
    window.location.replace('/questionnaire');
    // this.router.navigate()
    console.log(this.userModel);
  }

}
