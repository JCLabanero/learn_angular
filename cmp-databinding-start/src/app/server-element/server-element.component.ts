import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.None // APPLY TO EVERYTHING (PARENT n its CHILDREN)
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log(`constructor called`);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges called: ${changes}`);
  }
  ngOnInit() {
    console.log(`ngOnInit called`);
    // console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }
  ngDoCheck() {
    console.log(`ngDoCheck gets called for any changes`);
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called`);
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
    console.log(`Text Content: ${this.paragraph.nativeElement.textContent}`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngaftercontentchecked called`);
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called`);
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called`);
  }
  ngOnDestroy(): void {
    console.log(`ngOnDestroy called`);
  }
}
