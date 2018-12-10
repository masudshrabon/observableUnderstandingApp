import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  myObservableSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = interval(3000);
    this.numberObsSubscription = myNumbers.subscribe(
      (myNumber: number) => {
        console.log(myNumber);
      }
    );

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

    this.myObservableSubscription = myObservable.subscribe(
      (data: string) => {  console.log(data); },
      (error: string) => {  console.log(error); },
      () => {  console.log('completed.'); },
    );

  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();
  }

}
