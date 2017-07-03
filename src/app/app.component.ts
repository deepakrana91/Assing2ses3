import { car,Drivable } from './session3';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit()
  {

    let ferrari = new car("ferrari",23000000,"available",365)
    console.log(ferrari.start());
    console.log(ferrari.getposition());
    console.log(ferrari.getprice());
  }
}

