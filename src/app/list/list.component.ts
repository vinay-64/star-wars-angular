import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characters;
  @Output() onSideAssignedEvent1 = new EventEmitter<{
    name: string;
    side: string;
  }>();
  onSideAssign(characterInfoObject) {
    return this.onSideAssignedEvent1.emit(characterInfoObject);
  }
}
