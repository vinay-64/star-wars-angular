import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' },
  ];
  swService: StarWarsService;
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    const name = submittedForm.value.name;
    const side = submittedForm.value.side;
    console.log(submittedForm);
    this.swService.addCharacter(name, side);
  }
}
