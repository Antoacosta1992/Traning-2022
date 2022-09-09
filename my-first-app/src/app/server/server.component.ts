import { Component } from '@angular/core';

@Component({
 //Now you make this an attribute. This means that if you wanna use it in html you have cant have an component but use this as an attribute. 
 //selector: "[app-server]"
    selector: "app-server",   
    templateUrl: './server.component.html', 
})

export class ServerComponent {
    serverId: number= 10;
    serverStatus: string='Offline';
    
    constructor(){
        this.serverStatus= Math.random() > 0.5 ? 'Online' : 'Office';
    }

    getServerStatus(){
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}