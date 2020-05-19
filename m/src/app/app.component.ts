import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  animals;
  selectedAnimal = {"id":1,"Code":"q"};
  constructor() {
    this.name = `Angular! `
    this.animals = [
      {"id":1,"Code":"q"},
      {"id":2,"Code":"a"},
      {"id":3,"Code":"z"},
      {"id":4,"Code":"e"}
    ]
    this.selectedAnimal = this.animals[0]
  }
  byAnimal(item1,item2){
    if(item1 == null || item2 == null){
      return false;
    }
  return item1.id == item2.id
  }
}
