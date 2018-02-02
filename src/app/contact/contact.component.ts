import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { slideInOutAnimation } from '../_animations/fadeIn';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class ContactComponent implements OnInit {

  lat: number = 46.7834818;
  lng: number = 23.5464731;

  constructor() { }

  ngOnInit() {

  }
}
