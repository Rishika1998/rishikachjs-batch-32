import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Navigation',
  templateUrl: './Navigation.component.html',
  styleUrls: ['./Navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login=true;
  toggleMenu(){
  if(this.login){
    this.login=false;
  }else{
    this.login=true;
  }
}

}
