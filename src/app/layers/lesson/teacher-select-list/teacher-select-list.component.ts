import { DataChangeModel } from './../../../Services/Models/LessonModels/record-data-change.model';
import { Component, Inject, Input, NgModule } from "@angular/core";
import { SubSink } from "subsink";
import { AppExamApiService } from "../../../Services/exam-app-services/app-exam-api.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../../../app.component";
import { RecordOfLessonSesionComponent } from "../record-of-lesson-sesion/record-of-lesson-sesion.component";

@Component({
  selector: "app-teacher-select-list",
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule,MatListModule],
  templateUrl: "./teacher-select-list.component.html",
  styleUrl: "./teacher-select-list.component.scss",
})
export class TeacherSelectListComponent { 
  private _subSink = new SubSink();
  constructor(
    private _teacherAPIService: AppExamApiService,
    public dialogRef: MatDialogRef<TeacherSelectListComponent>,
    @Inject(MAT_DIALOG_DATA) public returnData: DataChangeModel,
    public dialog: MatDialog
  ) {}
  teachers: any;
  ngOnInit(): void {
    this.getTeacherList();
    console.log("gelen uid",this.returnData);
  }
  getTeacherList(): void{
    this._subSink.sink = this._teacherAPIService.get_teacherList().subscribe({
      next: (result) => {
          this.teachers = result;
      },
      error: (error) => {

      },
      complete: () => {

      }
    });
  }
  pushTeacher(teacher: any){
    this.returnData.teacherModel = teacher;
     this.dialog.open(RecordOfLessonSesionComponent,{
      data:this.returnData
    });
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }

}
