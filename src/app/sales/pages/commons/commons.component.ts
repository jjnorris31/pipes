import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.css']
})
export class CommonsComponent implements OnInit {

  public today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
