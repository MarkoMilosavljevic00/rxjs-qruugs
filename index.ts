import './style.css';

import { of, map, Observable, interval, fromEvent, zip } from 'rxjs';
import { add } from 'date-fns';

let datum = new Date(0);
let timer = document.body.querySelector(".timer");
let timerOb$ = interval(1000);
timerOb$.subscribe(() => {
  datum = add(datum,{seconds:1});
  timer.innerHTML = datum.getMinutes() + " : " + datum.getSeconds();
});

let button = document.body.querySelector("button");
let buttonOb$ = fromEvent(button, "click");

zip(buttonOb$,timerOb$).subscribe(data => {
  console.log(data)
})


// Open the console in the bottom right to see results.
