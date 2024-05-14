import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(`A to I ${this.activeToInactiveCounter}`);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log(`I to A ${this.inactiveToActiveCounter}`);
  }
}
