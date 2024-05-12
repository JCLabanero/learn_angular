import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName='ets';
  serverCreated = false;
  servers = ['Testserver', 'Testserver3']
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }
  ngOnInit(){}
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is "+this.serverName;
  }
  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
