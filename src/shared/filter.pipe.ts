import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(projects: any, ...searchTerm: string[]): any {
    if(!projects || !searchTerm) {
      return projects;
    }

    return projects.filter(project =>
      project.title.toLowerCase().indexOf(searchTerm) !== -1);
  }
}
