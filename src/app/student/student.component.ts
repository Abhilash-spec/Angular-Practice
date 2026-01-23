import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students = [
    {"id": 1, "name": "Anil"},
    {"id": 2, "name": "Balu"},
    {"id": 3, "name": "Chandu"},
    {"id": 4, "name": "Dan"},
    {"id": 5, "name": "Eshwar"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
