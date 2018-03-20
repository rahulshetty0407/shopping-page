import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
buttonStatus = false;
serverCreated = 'Server not created';
serverName = '';
serverDisplayStatyus = false;
servers = ['testserver' , 'testserver2'];
  constructor() {
    setTimeout(() => {
      this.buttonStatus = true;
    }, 2000);

  }

  ngOnInit() {
  }
  onCreateSever() {
    this.servers.push(this.serverName);
    this.serverDisplayStatyus = true;
    this.serverCreated = 'Server is created and name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
