import { Component } from '@angular/core';
import { GeneralTexts } from 'src/app/models/general-texts';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {

  GeneralTexts = GeneralTexts;

}
