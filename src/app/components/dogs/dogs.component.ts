import { Component } from '@angular/core';
import { GeneralTexts } from 'src/app/models/general-texts';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {

  GeneralTexts = GeneralTexts;

}
