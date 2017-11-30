import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(todos: any, filterBy: string): any {
    if (filterBy === 'all') {
      return todos;
    } else if (filterBy === 'active') {
      return todos.filter(todo => todo.completed === false);
    } else if (filterBy === 'completed') {
      return todos.filter(todo => todo.completed === true);
    }
    return null;
  }

}
