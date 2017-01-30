import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  CanLoad
 } from '@angular/router';

import { PagesComponent } from './pages.component';





@Injectable()

export class GuardsPagesService implements CanActivate, CanActivateChild, CanDeactivate<PagesComponent>, Resolve<PagesComponent>, CanLoad {

  constructor() { }

  canActivate(): boolean {
    consol.log('GuardsPagesService,canActivate()');
    return true;
  }

  canActivateChild(): boolean { 
    console.log('GuardsPagesService.canActivateChild()');
    return true;
  }

  canLoad(): boolean {
    consol.log('GuardsPagesService.canLoad()');
    return true;
  }


}
