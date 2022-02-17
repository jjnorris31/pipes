import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrls: ['./customs.component.css']
})
export class CustomsComponent implements OnInit {

  public camelCaseActive: boolean = false;

  public sortBy: string = 'name';

  public students = [
    {
      name: "Juan Jo basilio",
      grade: 10,
      career: "ITE"
    },
    {
      name: "Marco estrada",
      grade: 4,
      career: "ISC"
    },
    {
      name: "Laura vazques",
      grade:  5,
      career: "LMD"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public toggleCamelCase() {
    this.camelCaseActive = !this.camelCaseActive;
  }

  public setSortBy(sortBy: string) {
    this.sortBy = sortBy;
  }
}
