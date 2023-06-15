import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() character;
  @Output() sideAssignedEvent = new EventEmitter<{
    name: string;
    side: string;
  }>();
  onAssign(side) {
    // this.character.side = side;
    this.sideAssignedEvent.emit({ name: this.character.name, side: side });
  }
}
