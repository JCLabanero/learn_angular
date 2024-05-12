import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textToDisplay = 'Secret Password=tuna';
  isDisplaying = true;
  currNumber = 0;
  items = [];
  onDisplay() {
    this.isDisplaying = !this.isDisplaying;
    this.items.push(this.currNumber);
    this.currNumber++;
    // console.log(this.currNumber);
  }
  showDisplay() {
    if (this.isDisplaying) return '';
    return 'none';
  }
  getColor(item) {
    if (item > 4) return 'white';
    else return 'black';
  }
}
