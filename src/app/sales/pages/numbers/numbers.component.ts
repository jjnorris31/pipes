import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  public totalSales: number = 25556465.655466;
  public percentage: number = 0.48;

  constructor() { }

  ngOnInit(): void {
  }

}
