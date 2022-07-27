import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  @Output() emmiterTask = new EventEmitter();

  constructor() {}

  btnAddItem: string = '';

  salvaItem(): void {
    this.btnAddItem = this.btnAddItem.trim();
    if (this.btnAddItem) this.emmiterTask.emit(this.btnAddItem);
    this.btnAddItem = '';
  }

  ngOnInit(): void {}
}
