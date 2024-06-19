import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ExamUserWpLogsComponent } from '../../exam/exam-user-wp-logs/exam-user-wp-logs.component';
import { LogListComponent } from '../../log-list/log-list.component';
import { EaxmRecordsOfStudentComponent } from '../../student/record-of-student/components/eaxm-records-of-student/eaxm-records-of-student.component';
import { SubSink } from 'subsink';
import { studentEditModel, StudentRecordModel } from '../../../Services/Models/StudentModels/StudentDataModel';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { RecordOfStudentComponent } from '../../student/record-of-student/record-of-student.component';
import { MatSelectModule } from '@angular/material/select';
import { TeacherDersTanimListComponent } from "../teacher-ders-tanim-list/teacher-ders-tanim-list.component";

@Component({
    selector: 'app-record-of-teacher',
    standalone: true,
    templateUrl: './record-of-teacher.component.html',
    styleUrl: './record-of-teacher.component.scss',
    imports: [
        CommonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        FormsModule,
        MatTabsModule,
        MatTableModule,
        MatSelectModule,
        EaxmRecordsOfStudentComponent,
        MatListModule,
        ExamUserWpLogsComponent,
        LogListComponent,
        TeacherDersTanimListComponent
    ]
})
export class RecordOfTeacherComponent {
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  userPersonelInfoForm: any;
  userInfo!: any;
  userSums!: any;
  dialogForm: any;
  lessonOpt: any;
  studentEditModel!: studentEditModel;
  private _subSink = new SubSink();
  _isLoading = true;
  dataSource!: MatTableDataSource<StudentRecordModel>;

  constructor(
    public dialogRef: MatDialogRef<RecordOfStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public teacherUID: string,
    private _studentApiservice: AppExamApiService,
    public dialog: MatDialog
  ) {}
  MatDialogClose() {
    this.dialogRef.close();
  }
  recordOfTeacherReload(): void{

  }
  teacherUpdate(): void{

  }
  ngOnInit(): void {
    this.get_LessonList();
    this.get_TeacherInfo();
    setTimeout(() => {
      this._isLoading = false;
    }, 1500);
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }

  get_TeacherInfo(): void{
    this._subSink.sink = this._studentApiservice.get_TeacherInfo(this.teacherUID).subscribe({
      next: (result) => {
          this.userInfo = result;
          console.log(this.userInfo)
          this.get_TeacherSums();
      },
      error: (error) => {
          console.log(error);
      },
      complete: () => {

      }
    });
  }
  get_lessonList(): void{
    
  }
  get_TeacherSums(): void {
    this._subSink.sink = this._studentApiservice.get_TeacherSums(this.teacherUID).subscribe({
      next: (result) => {
          this.userSums = result;
          console.log(this.userSums);
      },
      error: (error) => {
          console.log(error);
      },
      complete: () => {
      }
    });
  }
  get_LessonList(): void{
    this._subSink.sink = this._studentApiservice.get_lessonList().subscribe({
      next: (result) => {
        this.lessonOpt = result;
      },
      error: (error) => {
        
      },
      complete: () => {

      }
    })
  }
}
