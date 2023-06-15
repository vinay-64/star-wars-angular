import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];
  chosenList = 'all';

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((character) => {
      return character.side === this.chosenList;
    });
  }

  onAssign(characterInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name == characterInfo.name;
    });
    this.characters[pos].side = characterInfo.side;
  }
}
