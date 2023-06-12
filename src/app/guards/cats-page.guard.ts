import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Navigation } from '../models/Navigation.interface';

export const catsPageGuard: CanActivateFn = (route, state) => {
  return true
};

// Since class based guards are now deprecated I used then new functional canActivate guard with the new inject function

