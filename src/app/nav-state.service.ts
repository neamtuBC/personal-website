import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavStateService {

  private selectedTab = new BehaviorSubject<string>('home');
  myTab = this.selectedTab.asObservable();

  constructor() { }

  changeSelectedTab(myTab: string){
    this.selectedTab.next(myTab);
  }
}
