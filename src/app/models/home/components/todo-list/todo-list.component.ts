import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';
import { IComponentsList } from '../i-components-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit, IComponentsList<TaskList>, DoCheck {


  constructor() { }
 

  TaskList: TaskList[] = JSON.parse(localStorage.getItem('TaskList') || '[]')

  get(termoBusca?: string): void {
    
  }

  delete(id: number): void {
   this.TaskList.splice(id,1);
  }

  deleteAll(){
    const confitm = window.confirm("Essa ação era excluir toda a sua lista! tem certeza que deseja continuar?")
    if(confitm)
      this.TaskList = [];
  }

  salvar(item:string){
    this.TaskList.push({task:item, checked:false});
  }

  validarInput(event:string, index:number){
    if(!event.length){
      const confirm = window.confirm("Task esta vazia, você deseja excluir?")
      if(confirm){
        this.delete(index);
      }
    }

  }

  setLocalStorage(){
    if(this.TaskList){
      this.TaskList.sort((first,last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem('TaskList', JSON.stringify(this.TaskList));
    }
  }


  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.setLocalStorage()
  }

}
