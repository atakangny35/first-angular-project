import { Component } from '@angular/core';
import { Model, ToDo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  isDisplay=false;
  model =new Model;

  getName(){

      return this.model.name;
  }

  getItem()
  {   if(this.isDisplay==true)
    {
      return this.model.DoList;
    }
    return this.model.DoList.filter(i=> !i.Action);
  }
  AddItem(data){
   
    if(data!="")
    {
      let todo= new ToDo(data,false);

      this.model.DoList.push(todo);
  
    }
    else{
    alert("this area is required!");
    }
    
  }
}
