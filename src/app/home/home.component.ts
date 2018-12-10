import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* const myNumbers = interval(3000);
    myNumbers.subscribe(
      (myNumber: number) => {
        console.log(myNumber);
      }
    ); */

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('First data package');
        }, 2000);
        setTimeout(() => {
          observer.next('Second data package');
        }, 4000);
        setTimeout(() => {
          observer.complete();
        }, 6000);
        setTimeout(() => {
          observer.next('Third data package');
        }, 7000);
        setTimeout(() => {
          observer.error('Error: This does not work!');
        }, 8000);
      }
    );

    myObservable.subscribe(
      (data: string) => {  console.log(data); },
      (error: string) => {  console.log(error); },
      () => {  console.log('completed.'); },
    );

  }

}
