import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl : './server.component.html',
  styles: [`
  .online{
    color: white;
  }
   `]
})
export class ServerComponent {
serverid = 10;
serverStatus = 'hello';
server = true;
constructor() {
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'ofline';
}
getServerStatus() {
  return this.serverStatus;
}
getColor() {
  if (this.serverStatus === 'online') {
    return 'green';
  }
  return 'red' ;
}
}
