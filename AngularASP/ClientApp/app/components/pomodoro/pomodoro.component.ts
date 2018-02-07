import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs/Rx';




@Component({
    selector: 'pomodoro',
    templateUrl: './pomodoro.component.html'
})

export class PomodoroComponent implements OnInit, OnDestroy {

    minutesDisplay: number;
    secondsDisplay: number;
    isPaused: boolean =false;
    buttonLabel: string = 'Start';



    resetTimer(): void {

        this.minutesDisplay = 24;
        this.secondsDisplay = 59;
    }
    ngOnInit() {
        console.log("hej");
        
        this.resetTimer();
        
    }
    

    refresh(): void {
       
        window.location.reload();
    }

    startTimer(): void {
        this.resetTimer(); 
        setInterval(() => this.tick2(), 60000);
        setInterval(() => this.tick(), 1000);
      
    }
    private tick(): void {
        if (this.secondsDisplay == 0 && this.minutesDisplay == 0) { this.refresh(); }
        else if (--this.secondsDisplay < 0) {
            this.secondsDisplay = 59;

        }
    }
    private tick2(): void {
        if (this.minutesDisplay == 0) { this.refresh(); }
        else if (--this.minutesDisplay < 0) {
            this.minutesDisplay = 24;

        }
    }

    ngOnDestroy(): void {
                throw new Error("Method not implemented.");
            }
   
    }
    //togglePause(): void {
    //    this.resetTimer();
    //    setInterval(() => this.tick(), 100);
    //    this.isPaused = !this.isPaused;
    //    if ( this.secondsDisplay < 0) {
    //        this.buttonLabel = this.isPaused ? 'Resume' : 'Stop';
    //    } 
    //}

    //ngOnDestroy() {
    //    console.log("Restart...Kom igen nu!");
    //    this.secondsDisplay = 0;  
    //  //  this.minutesDisplay = 25;
       
    //}
//}
  

   






   
