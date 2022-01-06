import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ikozagon';
  oldal=0;

  onClickSzamit(){
    let terulet= 5 *Math.pow(this.oldal,2)*(1+Math.sqrt(5)+Math.sqrt(5+2*Math.sqrt(5)));
    console.log(terulet);
  }
}
