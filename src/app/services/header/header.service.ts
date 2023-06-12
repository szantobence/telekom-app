import { Injectable } from '@angular/core';
import { NavigationButton } from 'src/app/models/navigation-buttons.interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeaderElementData(): NavigationButton[] {
    return [
      {
        id: "cats",
        name: "Macskák",
        route: "/cats",
        icon: "cat"
      },
      {
        id: "dogs",
        name: "Kutyák",
        route: "/dogs",
        icon: "dog"
      },
      {
        id: "mice",
        name: "Egerek",
        route: "/mice",
        icon: "mouse"
      }
    ]
  }
}
