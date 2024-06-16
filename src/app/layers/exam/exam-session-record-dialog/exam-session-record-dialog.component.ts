import { Component, Inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ExamSessionRecordModel } from '../../../Services/Models/ExamModels/ExamDataModels';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { SubSink } from 'subsink';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { ExamSessionListComponent } from '../exam-session-list/exam-session-list.component';
import { ExamSessionStudentListComponent } from '../exam-session-student-list/exam-session-student-list.component';
import { ExamSessionStudentListForSessionComponent } from "../exam-session-student-list-for-session/exam-session-student-list-for-session.component";
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { LogListComponent } from '../../log-list/log-list.component';

@Component({
    selector: 'app-exam-session-record-dialog',
    standalone: true,
    templateUrl: './exam-session-record-dialog.component.html',
    styleUrl: './exam-session-record-dialog.component.scss',
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
        FormsModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        ExamSessionStudentListComponent,
        ExamSessionListComponent,
        MatListModule,
        ExamSessionStudentListForSessionComponent,
        LogListComponent
    ]
})
export class ExamSessionRecordDialogComponent {
  private _subSink = new SubSink();
  _isLoading = true;
  userID = localStorage.getItem('userID');
  examSessionInfo: ExamSessionRecordModel = {
    userID: 0,
    oturumNo:0,
    examSessionUID: '',
    sessionDate: new Date(),
    kontenjan: 0,
    toplamKesinKayit: 0,
    toplamOnKayit: 0,
    toplamKitapcikAlan: 0,
    toplamKatilimSaglayan: 0,
    toplamDevamsiz: 0,
    isActive: false,
    isCreatedUser: null,
    isModifiedUser: null,
    isCreatedDate: new Date(),
    isModifiedDate: new Date(),
    sessionBilgi: ''
  } ;
  constructor(
    public dialogRef: MatDialogRef<ExamSessionRecordModel>,
    @Inject(MAT_DIALOG_DATA) public examSessionUID: string,
    private _examApiservice: AppExamApiService,
    public dialog: MatDialog
  ) {}
  @ViewChild(ExamSessionStudentListForSessionComponent)
  childComponentSession!: ExamSessionStudentListForSessionComponent;
  @ViewChild(LogListComponent)
  childComponentSessionLoglist!: LogListComponent;
  ngOnInit(): void {
    this.getExamSessionInfo();
  }
  sessionInfoUpdate(): void {
    this._isLoading = true;
    const sessionEditModel = {
      examuid: this.examSessionUID,
      examSessionUID: this.examSessionInfo.examSessionUID,
      sessioninfo: this.examSessionInfo.sessionBilgi,
      kontenjan: this.examSessionInfo.kontenjan,
      examdate: this.examSessionInfo.sessionDate,
      userid: Number(this.userID),
      subeID: Number(localStorage.getItem("subeID"))
    }
    this._subSink.sink = this._examApiservice.post_SessionUpdate(sessionEditModel).subscribe({
      next: (result) => {
        this.sessionRecordReload();
      },
      error: (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data: {
            title:"Hata Oluştu",
            message: error.message
          }
        })
      },
      complete: () => {

      }
    })
  }
  getExamSessionInfo(): void {
    this._subSink.sink = this._examApiservice.get_ExamSessionRecordData(this.examSessionUID).subscribe({
      next: (result) => {
        this.examSessionInfo = result;
        this.examSessionInfo.userID = Number(localStorage.getItem('userID'));
      },
      error: (error) => {

      },
      complete: () => {
        this._isLoading = false;
      }
    });
  }
  sessionRecordReload(): void {
    this._isLoading = true;
    this.getExamSessionInfo();
    this.childComponentSession.getList();
    this.childComponentSessionLoglist.getLogList();
  }
  MatDialogClose() {
    this.dialogRef.close();
  }
}
