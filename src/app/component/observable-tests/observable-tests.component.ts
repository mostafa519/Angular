import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { Observable, Subscription, from, fromEvent, map, merge, of, take } from 'rxjs';

@Component({
  selector: 'app-observable-tests',
  templateUrl: './observable-tests.component.html',
  styleUrls: ['./observable-tests.component.scss']
})
export class ObservableTestsComponent implements OnInit, OnDestroy {




  sub!: Subscription;
  observ = new Observable(obs => {
    console.log("observable >>>>>>>");
    setTimeout(() => {
      obs.next('1');
    }, 1000);
    setTimeout(() => {
      obs.next('2');
    }, 2000);
    setTimeout(() => {
      obs.next('3');
    }, 3000);
    setTimeout(() => {
      obs.error('error');
    }, 4000);
    setTimeout(() => {
      obs.next('4');
    }, 3000);
    setTimeout(() => {
      obs.complete();
    }, 4000);
  });

  ngOnInit(): void {
    this.sub = this.observ.subscribe({
      next: (val) => {
        console.log(val);


      },
      error: (msg) => {
        console.log(msg);
      },
      complete: () => {
        console.log('Completed');


      },

    }
    )

    // this.observ.subscribe(
    //   data => {
    //     console.log(data);

    //   }
    // )
    // //Mapping and Pipe

    // let maps=of("Hello World")

    //  maps.pipe(map(data=>data.toUpperCase())).subscribe(data=>console.log(data));
    //  maps.pipe(map(data=>data.toUpperCase().includes('W'))).subscribe(data=>console.log(data));


    // // //     //operators && MergeOperators
    // let observ2=new Observable((obse:any)=>{
    //   obse.next("Hello")
    // });
    // let observ3=new Observable((obse:any)=>{
    // obse.next("Wold");
    // });
    // let observ4=merge(observ2, observ3)
    // observ4.subscribe(data=>console.log(data));

    // //Of Creation Data
    // of(1,2,3).subscribe(data=>console.log(data));
    // // of([1,2,3]).subscribe(data=>console.log(data));

    // //From Creation Data
    //  from([1,2,3,8]).subscribe(data=>console.log(data));

    // //FromEvent Observation

    // // let obsevent =fromEvent(document,'click');
    // // obsevent.subscribe(()=>console.log("Welcome From Event Observable :"));

    // //Take Event Observation
    // let obsevent =fromEvent(document,'click');
    // obsevent.pipe(take(5)).subscribe(()=>console.log("Welcome From Event Observable :"));

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

    console.log("endding observation");

  }
}
