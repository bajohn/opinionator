import { Component } from '@angular/core';

declare var TypingDNA:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'opinionator';
  constructor() {
    var tdna  = new TypingDNA();
    console.log(tdna)
    //anytext pattern
    var typingPattern = tdna.getTypingPattern({type:0, length:160});
    console.log(typingPattern)
    //sametext pattern
    var typingPattern = tdna.getTypingPattern({type:1, text:"Hello5g21?*"});
    //extended pattern
    var typingPattern = tdna.getTypingPattern({type:2, text:"example@mail.com"});
  }
}
