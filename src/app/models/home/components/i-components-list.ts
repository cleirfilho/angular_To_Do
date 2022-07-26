export interface IComponentsList<T> {
  TaskList: T[];
  get(termoBusca?:string):void;
  delete(id:number):void;
}
