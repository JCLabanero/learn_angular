import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent 
implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onChangeFirst(){
    console.log("onChangeCalled");
    this.serverElements[0].name = 'Changed!'
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges called: ${changes}`);
  }
  ngOnInit() {
    console.log(`ngOnInit called`);
  }
  ngDoCheck() {
    console.log(`ngDoCheck gets called for any changes`);
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called`);
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
  onDestroyFirst(): void {
    this.serverElements.splice(0,1);
  }
}
