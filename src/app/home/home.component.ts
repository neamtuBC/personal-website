import { Component, OnInit} from '@angular/core';
import { NavStateService } from '../nav-state.service';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { slideInOutAnimation } from '../_animations/fadeIn';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
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
