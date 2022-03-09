import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

// potential solution for animate right 
// @Component({
//     animations: [
//         trigger('pageAnimations', [
//           transition(':enter', [
//             animate('1s ease', style({
//                 transform: 'translateX(-100px)',
//               })),
//           )
//         ]
// })

export class SmallCodingExercise implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // ms: number of milliseconds
  // returns a Promise that is resolved after ms milliseconds
  delay(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // el: element node object
  // moves the el: anyement to the right by 100px over a duration of 1 second
  animateRight(el: any) {
    let pos = 0;
    let id = setInterval(frame, 1000);
    clearInterval(id);
    function frame() {
        if (pos == 200) {
        clearInterval(id);
        } else {
        pos++; 
        el.style.right = pos + 'px'; 
        el.style.left = pos + 'px'; 
        }
    }
  }

  // xs: array
  // returns: a new a: anyrray, with unique items
  removeDuplicates(xs: any) {
      return xs.push("unique item 1", "unique item 2");
  }
}
