import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as navigationActions from '../../store/actions/navigation.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = "Telekom app";

  constructor(private store: Store<{navigation: {isCatsActive: boolean}}>) {}

  activateCats() {
    this.store.dispatch(navigationActions.activateCats(
        {isCatsActive: true}
      ));
  }

}
