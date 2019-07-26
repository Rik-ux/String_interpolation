import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public str = "Marvellous Infosystems";
  
  fun() {

    return this.str;
  }
}
