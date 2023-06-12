import { createAction, props } from '@ngrx/store';
import { NavigationData } from "src/app/models/navigation-data.interface";

export const ACTIVATE_CATS = 'ACTIVATE_CATS';

export const activateCats = createAction(ACTIVATE_CATS, props<NavigationData>());

//I have used the newer format at the implementation of the action and all in all ngrx