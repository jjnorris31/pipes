import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent implements OnInit {

  public name: string = 'JuanJo';

  public myObservable = interval(1000);

  public eventType: string = 'women';

  public eventMap = {
    'man': 'dude',
    'women': 'madam'
  }

  public clients: string[] = ['María', 'Roberto', 'Ethan', 'Mary'];

  public student = {name: 'JuanJo', lastName: 'Basilio'};

  public clientsMap = {
    '=0': 'any clients',
    '=1': '1 client',
    'other': '# clients'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public changeEvent() {
    this.eventType === 'women' ? 'man' : 'women'; 
  }

  public deleteClient() {
    if (this.clients.length > 0) {
      this.clients = this.clients.slice(0, this.clients.length - 1);
    }
  }

}
