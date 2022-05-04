import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Teacher} from "../../../../model/teacher.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.css']
})
export class TeacherItemComponent implements OnInit {
  @Input() teacher:Teacher = new Teacher(0, "", "", "", 0);
  @Output() refreshTeacherEvent:EventEmitter<void> = new EventEmitter<void>();

  constructor(public httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  public onDeleteTeacher():void {
    this.httpClient.delete("http://localhost:8081/catalog/teacher?id={id}".replace('{id}', this.teacher.id + ''))
      .subscribe(respone => {
        this.refreshTeacherEvent.emit();
      },
      error => {
        alert('Error when deleting teacher.');
      })

  }
}
