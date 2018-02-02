import { Component, OnInit } from '@angular/core';
import { NavStateService } from './nav-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  selectedTab:string = "";

  constructor( private _navState: NavStateService) { }

  ngOnInit() {
    this._navState.myTab.subscribe(res => this.selectedTab = res);
    this._navState.changeSelectedTab(this.selectedTab);
    if(window.location.pathname != "/personal-website/"){
      this.selectedTab = window.location.pathname;
    }
  }

}
