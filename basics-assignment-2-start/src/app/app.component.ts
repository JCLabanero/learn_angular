import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hasString = false;
  username = '';

  onChange(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    if (this.username != '') this.hasString = true;
    else this.hasString = false;
  }
  setName() {
    this.username = '';
  }
  isNameNotEmpty() {
    return this.hasString;
  }
}
