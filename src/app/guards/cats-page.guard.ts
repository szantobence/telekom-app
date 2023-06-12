import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { NavigationData } from '../models/navigation-data.interface';

export const catsPageGuard: CanActivateFn = (route, state) => {
  let store = inject(Store<{navigation: {isCatsActive: boolean}}>);
  return store.select('navigation').pipe(map((res: NavigationData) => {
    return res.isCatsActive ? true : false;
  }));
};

// Since class based guards are now deprecated I used then new functional canActivate guard with the new inject function
