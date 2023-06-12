import { createAction, props } from '@ngrx/store';
import { Navigation } from "src/app/models/Navigation.interface";

export const ACTIVATE_CATS = 'ACTIVATE_CATS';

export const activateCats = createAction(ACTIVATE_CATS, props<Navigation>());