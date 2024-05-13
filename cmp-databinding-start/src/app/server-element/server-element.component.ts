import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None // APPLY TO EVERYTHING (PARENT n its CHILDREN)
})
export class ServerElementComponent {
  @Input('srvElement') element: { type: string; name: string; content: string };
  ngOnInit() {}
}
