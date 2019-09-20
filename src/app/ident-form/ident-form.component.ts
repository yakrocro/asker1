import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-ident-form',
  templateUrl: './ident-form.component.html',
  styleUrls: ['./ident-form.component.css']
})
export class IdentFormComponent implements OnInit {

  userModel = new User('juju', 'juju@email.com', 'mdp');

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  onSubmit(){
    window.location.replace('/questionnaire');
    // this.router.navigate()
    console.log(this.userModel);
  }

}
