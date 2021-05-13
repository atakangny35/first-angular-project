import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  name= "Atakan";
  DoList= [
    {description:"Breakfast",Action:"No"},
    {description:"Sport",Action:"No"},
    {description:"Study",Action:"No"},
    {description:"Pay the bills",Action:"No"}
  ]
}
