import { Component, Inject, ViewChild } from '@angular/core';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { SubSink } from 'subsink';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-lesson-set-in-lesson-record',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './student-lesson-set-in-lesson-record.component.html',
  styleUrl: './student-lesson-set-in-lesson-record.component.scss'
})
export class StudentLessonSetInLessonRecordComponent {
  private _subSink = new SubSink();
  constructor(
    private _lessonAPIService: AppExamApiService,
    public dialogRef: MatDialogRef<StudentLessonSetInLessonRecordComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private _lessonUID: string
  ) {}
  students!: any;
  sessions!: any;
  userID = Number(localStorage.getItem('userID'));
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 30;
  newLessonSessionFormGroup = new FormGroup({
      studentUID: new FormControl("",[Validators.required]),
      lessonSessionUID: new FormControl("",[Validators.required]),
      bilgi: new FormControl(""),
      userID: new FormControl(this.userID)
  });
  getLessonSessionList(): void{
    this._subSink.sink = this._lessonAPIService.get_lesson_session_list(this._lessonUID).subscribe({
      next: (result) => {
        this.sessions = result;
        console.log(result);
      },
      error: (error) => {
      },
      complete: () => {
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;
      }
    });
  }
  getStudentList(): void{
    this._subSink.sink = this._lessonAPIService.get_studentList().subscribe({
      next: (result) => {
        this.students = result;
        console.log(result);
      },
      error: (error) => {
      },
      complete: () => {
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;
      }
    });
  }
  studentSessionSet(): void {
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;
    this._subSink.sink = this._lessonAPIService.post_student_lessonSessionSet(this.newLessonSessionFormGroup.value).subscribe({
      next: (result) => {
        this.progressBarMode = 'indeterminate';
        this.progressBarValue = 30;
      },
      error: (error) => {

      },
      complete: () => {
          this.dialogRef.close(true);
      }
    })
  }
  ngOnInit(): void {
    this.getLessonSessionList();
    this.getStudentList();
  }
}
