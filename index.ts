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
    console.log("prvo stampanje", objekat);
    currentPercent = nextPercent;
    nextPercent += percents[index];
    console.log(currentPercent, nextPercent);
    if(drawnNumber > currentPercent && drawnNumber <= nextPercent){
      objekatVr = objekat;
    }else if(drawnNumber > nextPercent){
    }
    // if(index === 0){
    //   if(drawnNumber > 0 && drawnNumber <= percents[index]){
    //     console.log("prvi")
    //     return object;
    //   }
    // }else{
    //   console.log(drawnNumber > percents[index-1])
    //   console.log(percents[index])

    //   if(drawnNumber > percents[index-1] && drawnNumber <= percents[index]){
    //     console.log("drugi")
    //     return object;
    //   }
    // }
  });

  return objekatVr;
}

let nesto = new Objekat(1, "nesto");
let nista = new Objekat(2, "nista");


console.log(getRandomObjectFrom([50,50, 50asda], nesto, nista))

// let a = Math.floor(Math.random()*10000) + 2000;
// console.log(a);
// interval(a).subscribe(console.log)


// Open the console in the bottom right to see results.
