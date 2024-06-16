import {
  AfterViewInit,
  Component,
  Inject,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialog,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import {
  StudentRecordModel,
  UserRecordModel,
  studentEditModel,
} from '../../../Services/Models/StudentModels/StudentDataModel';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { EaxmRecordsOfStudentComponent } from './components/eaxm-records-of-student/eaxm-records-of-student.component';
import { SubSink } from 'subsink';
import { StudentExamSetDialogComponent } from './components/student-exam-set-dialog/student-exam-set-dialog.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { ExamUserWpLogsComponent } from "../../exam/exam-user-wp-logs/exam-user-wp-logs.component";
import { LogListComponent } from "../../log-list/log-list.component";
import { StudentExamNetChartComponent } from './components/student-exam-net-chart/student-exam-net-chart.component';
@Component({
    selector: 'app-record-of-student',
    standalone: true,
    templateUrl: './record-of-student.component.html',
    styleUrl: './record-of-student.component.scss',
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
        EaxmRecordsOfStudentComponent,
        MatListModule,
        ExamUserWpLogsComponent,
        LogListComponent
    ]
})
export class RecordOfStudentComponent implements AfterViewInit {
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  userPersonelInfoForm: any;
  userInfo!: any;
  dialogForm: any;
  studentEditModel!: studentEditModel;
  private _subSink = new SubSink();
  _isLoading = true;
  dataSource!: MatTableDataSource<StudentRecordModel>;
  @ViewChild(EaxmRecordsOfStudentComponent)
  childComponent!: EaxmRecordsOfStudentComponent;
  @ViewChild(LogListComponent)
  childComponentLogList!: LogListComponent;
  constructor(
    public dialogRef: MatDialogRef<RecordOfStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public studentUID: string,
    private _studentApiservice: AppExamApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getUserInfo();
    setTimeout(() => {
      this._isLoading = false;
    }, 1500);
  }
  studentUpdate(): void {
    this.studentEditModel = {

      studentUID: this.userInfo.userUID,
      ad: this.userInfo.ad,
      soyad: this.userInfo.soyad,
      telefon: this.userInfo.telefon,
      eposta: this.userInfo.eposta,
      userID: Number(localStorage.getItem("userID")),
      subeID: 1
    };
    this._isLoading = true;
    this._subSink.sink = this._studentApiservice
      .post_StudentEdit(this.studentEditModel)
      .subscribe({
        next: (result) => {
        this.recordOfStudentReload();
        },
        error: (error) => {
          this.dialog.open(ResultMessageBoxDialogComponent, {
            data: {
              title: 'hata Oluştu',
              message: error.message,
            },
            autoFocus: true,
            width: 'auto',
            height: 'auto',
          });
          this._isLoading = false;
        },
        complete: () => {
          this._isLoading = false;
        },
      });
    console.log(this.dataSource.data);
  }
  getUserInfo() {
    this._isLoading = true;
    this._subSink.sink = this._studentApiservice
      .get_UserRecord_Data(this.studentUID)
      .subscribe({
        next: (result) => {
          console.log(result);
          this.dataSource = new MatTableDataSource(result);
          this.userInfo = result;
          console.log('xxx', this.userInfo);
          this._isLoading = false;
        },
        error: (error) => {
          this.dialog.open(ResultMessageBoxDialogComponent, {
            data: {
              title: 'Hata Oluştu',
              message: error.error,
            },
            width: 'auto',
            height: 'auto',
            autoFocus: true,
          });
        },
      });
  }
  MatDialogClose() {
    this.dialogRef.close();
  }
  ngAfterViewInit(): void {}
  recordOfStudentReload(): void {
    this.getUserInfo();
    this.childComponent.getList();
    this.childComponentLogList.getLogList();
  }
  studentExamSet(): void {
    console.log(this.studentUID);
    this.dialog
      .open(StudentExamSetDialogComponent, {
        data: this.studentUID,
        autoFocus: true,
        disableClose: true,
        width: '800px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe(() => {
        this.recordOfStudentReload();
      });
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }
  examScoreChartDialog(): void{
    this.dialog.open(StudentExamNetChartComponent,{
      data:this.studentUID,
      autoFocus: true,
      disableClose: false,
      width:"70%",
      height:"70%"
    });
  }
}

export interface recordFormData {
  ad: string;
  soyad: string;
  telefon: string;
  eposta: string;
  userUID: string;
  subeNo: number;
}
