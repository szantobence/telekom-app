import { createReducer, on } from "@ngrx/store";
import * as navigation from "../actions/navigation.actions";
import { Navigation } from "src/app/models/Navigation.interface";

const initialNavigationState: Navigation = {
    isCatsActive: false,
}

export const navigationReducer = createReducer(
    initialNavigationState,
    on(navigation.activateCats, (state, action) => ({ ...state, isCatsActive: action.isCatsActive })),
);