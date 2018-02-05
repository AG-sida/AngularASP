import { Component, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Observable, Subscription } from 'rxjs/Rx'




@Component({
    selector: 'pomodoro',
    templateUrl: './pomodoro.component.html'
})

export class PomodoroComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

    

    ngOnInit() {



    }
  
    }

   

