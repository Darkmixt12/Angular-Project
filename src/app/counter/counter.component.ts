import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    
    selector: 'app-counter',
    template: `
    <h3>Counter:  {{counter}} </h3>

    <button (click)="increBy(1)">+1</button>
    <button (click)="reset()">RESET</button>
    <button (click)="increBy(0)">-1</button>
    
    `,
    })
export class CounterComponent {
    public counter: number = 10;

        increBy(value: number): void {
          if(value >=1){
            this.counter += value
          }else{
            this.counter -= 1
          }
      
        }
        reset(): void {
          this.counter = 10
        }
}

