import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html'
})
export class SiginComponent implements OnInit {
  user: UserLogin = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {}

  signin() {
    console.log(this.user);
  }

}
