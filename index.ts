import './style.css';

import { of, map, Observable, interval, fromEvent, zip, combineLatest, delayWhen, switchMap } from 'rxjs';
import { add } from 'date-fns';
import { Objekat } from './objekat';

let datum = new Date(0);
let timer = document.body.querySelector(".timer");
let timerOb$ = interval(1000);
// timerOb$.subscribe(() => {
//   datum = add(datum,{seconds:1});
//   timer.innerHTML = datum.getMinutes() + " : " + datum.getSeconds();
// });

let button = document.body.querySelector("button");
let buttonOb$ = fromEvent(button, "click");
buttonOb$.subscribe(() => console.log("samo dugme"));
// .pipe(
//   switchMap(() => timerOb$)
// ).subscribe(console.log);


combineLatest(timerOb$,buttonOb$).subscribe(data => {
  console.log(data)
})

export function getRandomObjectFrom(percents: number[], ...objects: any[]): any {
  let max: number = 0;
  percents.forEach((percent) => (max += percent));
  let drawnNumber = Math.floor(Math.random() * max);

  console.log(drawnNumber);
  let currentPercent: number = 0
  let nextPercent: number = 0;
  let objekatVr;

  objects.forEach((objekat, index) => {
    currentPercent = nextPercent;
    nextPercent += percents[index];
    if(drawnNumber > currentPercent && drawnNumber <= nextPercent){
      objekatVr = objekat;
    }
  });

  return objekatVr;
}

let nesto = new Objekat(1, "nesto");
let nista = new Objekat(2, "nista");
let ono = new Objekat(3, "nanana")


console.log(getRandomObjectFrom([50,50,500], nesto, nista, ono))

// let a = Math.floor(Math.random()*10000) + 2000;
// console.log(a);
// interval(a).subscribe(console.log)


// Open the console in the bottom right to see results.
