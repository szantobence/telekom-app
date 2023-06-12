import { Component } from '@angular/core';
import { GeneralTexts } from 'src/app/models/general-texts';

@Component({
  selector: 'app-mice',
  templateUrl: './mice.component.html',
  styleUrls: ['./mice.component.scss']
})
export class MiceComponent {

  GeneralTexts = GeneralTexts;

}
