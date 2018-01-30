import { Component, OnInit} from '@angular/core';
import { NavStateService } from '../nav-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  selectedTab:string = "";

  constructor( private _navState: NavStateService) { }

  changeNav(){
    this.selectedTab="contact";
    this._navState.changeSelectedTab(this.selectedTab);
  }

  ngOnInit() {

  }

}
