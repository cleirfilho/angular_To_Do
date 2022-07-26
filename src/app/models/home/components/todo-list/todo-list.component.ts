import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';
import { IComponentsList } from '../i-components-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit, IComponentsList<TaskList> {


  constructor() { }

  TaskList: TaskList[] = [
    {task: 'primeiro' , checked:true},
    {task: 'segundo', checked:false}
  ]

  get(termoBusca?: string): void {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
   this.TaskList.splice(id,1);
  }
  deleteAll(){
    const confitm = window.confirm("Essa ação era excluir toda a sua lista! tem certeza que deseja continuar?")
    if(confitm)
      this.TaskList = [];
  }


  ngOnInit(): void {
  }

}
