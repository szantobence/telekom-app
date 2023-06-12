import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as navigationActions from '../../store/actions/navigation.actions'
import { NavigationData } from 'src/app/models/navigation-data.interface';
import { Observable } from 'rxjs';
import { NavigationButton } from 'src/app/models/navigation-buttons.interface';
import { HeaderService } from 'src/app/services/header/header.service';
import { GeneralTexts } from 'src/app/models/general-texts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  GeneralTexts = GeneralTexts;
  navigationButtons!: NavigationButton[];
    
  constructor(
      private readonly store: Store<{navigation: {isCatsActive: boolean}}>,
      private readonly headerService: HeaderService,
    ) {}

  ngOnInit(): void {
    this.navigationButtons = this.headerService.getHeaderElementData();
  }

  activateCats(routeId: string) {
    if(routeId === "mice") {
      this.store.dispatch(navigationActions.activateCats(
        {isCatsActive: true}
      ));
    }
  }

  getCatsPageStatus(): Observable<NavigationData> {
    return this.store.select('navigation');
  }

}
