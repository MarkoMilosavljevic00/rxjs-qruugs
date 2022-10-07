import './style.css';

import { of, map, Observable, interval, fromEvent, zip, combineLatest, delayWhen, switchMap } from 'rxjs';
import { add } from 'date-fns';

let datum = new Date(0);
let timer = document.body.querySelector(".timer");
let timerOb$ = interval(1000);
// timerOb$.subscribe(() => {
//   datum = add(datum,{seconds:1});
//   timer.innerHTML = datum.getMinutes() + " : " + datum.getSeconds();
// });

let button = document.body.querySelector("button");
let buttonOb$ = fromEvent(button, "click").pipe(
  switchMap(() => timerOb$)
).subscribe(console.log);

buttonOb$.unsubscribe();

// combineLatest(buttonOb$,timerOb$).subscribe(data => {
//   console.log(data)
// })

// let a = Math.floor(Math.random()*10000) + 2000;
// console.log(a);
// interval(a).subscribe(console.log)


// Open the console in the bottom right to see results.
