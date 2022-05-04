import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-update-teacher',
  templateUrl: './add-update-teacher.component.html',
  styleUrls: ['./add-update-teacher.component.css']
})
export class AddUpdateTeacherComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddUpdateTeacherComponent>) { }

  ngOnInit(): void {
  }

  public onClose(){
    this.dialogRef.close();
  }
}
