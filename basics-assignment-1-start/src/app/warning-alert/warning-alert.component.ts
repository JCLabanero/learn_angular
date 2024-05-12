import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>warning-alert works!</p>`,
  styles: [
    `
      p {
        background-color: yellow;
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
