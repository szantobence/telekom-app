import { createReducer, on } from "@ngrx/store";
import * as navigation from "../actions/navigation.actions";
import { NavigationData } from "src/app/models/navigation-data.interface";

const initialNavigationState: NavigationData = {
    isCatsActive: false,
}

export const navigationDataReducer = createReducer(
    initialNavigationState,
    on(navigation.activateCats, (state, action) => ({ ...state, isCatsActive: action.isCatsActive })),
);

//I have used the newer format at the implementation of the reducer and all in all ngrx