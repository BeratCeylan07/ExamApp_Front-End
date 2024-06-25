import { CommonModule, DatePipe } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ExamUserSetDialogComponent } from '../exam-user-set-dialog/exam-user-set-dialog.component';
import { ExamRecordDialogComponent } from '../exam-record-dialog/exam-record-dialog.component';
import { ExamSessionRecordDialogComponent } from '../exam-session-record-dialog/exam-session-record-dialog.component';
import { Router } from '@angular/router';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';

@Component({
  selector: 'app-exam-student-set-in-exam-session',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
  ],
  templateUrl: './exam-student-set-in-exam-session.component.html',
  styleUrl: './exam-student-set-in-exam-session.component.scss',
})
export class ExamStudentSetInExamSessionComponent {
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  private _subSink = new SubSink();
  _isLoading = true;
  isLinear = true;
  wpBtn = true;
  wpMesaj!: string;
  examUID!: string;
  examInfo!: any;
  studentOptData: any[] = [];
  examSetRes!: any;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  selectedStudentUID!: string;
  wpMsg!: string;
  subeID = localStorage.getItem('subeID');
  userUID = localStorage.getItem('userUID');
  constructor(
    private _dialogRef: MatDialogRef<ExamStudentSetInExamSessionComponent>,
    @Inject(MAT_DIALOG_DATA) private _sessionuID: string,
    private _examApiservice: AppExamApiService,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder
  ) {}
  getStudentList(): void {
    this._subSink.sink = this._examApiservice
      .get_examUID(this._sessionuID)
      .subscribe({
        next: (result) => {
          this.examUID = result.uid;
          this.examInfo = result;
          if (result !== null) {
            this._subSink.sink = this._examApiservice
              .get_StudentlistNotInExamSession(this.examUID)
              .subscribe({
                next: (result) => {
                  this.studentOptData = result.$values;
                  this.isLinear = !this.isLinear;
                  console.log('record: ', this.studentOptData);
                },
                error: (error) => {
                  console.log(error);
                },
                complete: () => {
                  this._isLoading = false;
                  this.progressBarMode = 'determinate';
                  this.progressBarValue = 100;
                },
              });
          }
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {},
      });
  }
  ngOnInit(): void {
    this.getStudentList();
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }
  studentSessionSet(): void {
    const studentExamSetModel = {
      examSessionUID: this._sessionuID,
      studentUID: this.selectedStudentUID,
      userUID: Number(localStorage.getItem('userID')),
    };
    this._subSink.sink = this._examApiservice
  
      .post_StudentExamSet(studentExamSetModel)
      .subscribe({
        next: (result) => {
          this.examSetRes = result;
          console.log(result);
          this.progressBarMode = 'indeterminate';
          this.progressBarValue = 30;
          setTimeout(() => {
            this.progressBarMode = 'determinate';
            this.progressBarValue = 100;
          }, 1500);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          // this._dialogRef.close();
        },
      });
    this.wpBtn = false;
  }

  setWpMsg(): void {
    let datePipe = new DatePipe('en-EN');

    const student = this.studentOptData.find(
      (x) => x.uid === this.selectedStudentUID
    );
    let studenTel = "+90" + JSON.stringify(student.tel).replaceAll(" ", "").replaceAll('"','');
    const exam = this.examInfo;
    console.log("const exam: ",exam);
    const examDate = datePipe.transform(exam.tarih, 'dd.MM.yyyy - HH:mm');

    console.log("Öğrenci Telefonu: ", studenTel);
    this.wpMesaj = `Sn.${student.ad} ${student.soyad}%0ADeneme Sınavı Kaydınız Başarıyla Alınmıştır.%0AOturum Bilgileriniz:%0ASınav Adı: ${exam.denemeAdi},%0AKategori: ${exam.sinavKategori},%0AYayın: ${exam.yayinAdi},%0ASınav Tarihi: ${examDate},%0ABaşarılar Dileriz..`;
    this.wpMsg = `whatsapp://send?text=${this.wpMesaj}&phone=${studenTel}`;
    this.wpBtn = true;
    
    window.location.href = this.wpMsg;

    const wp_msg_model = {
      mesaj: this.wpMesaj,
      subeID: Number(localStorage.getItem('subeID')),
      userID: Number(localStorage.getItem('userID')),
    }
    this._subSink.sink = this._examApiservice.post_Wp(wp_msg_model).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data:{
            title:"Hata Oluştu",
            message: error.mesasge
          }
        })
      },
      complete: () => {
        console.log("WP mesajı gönderildi.");
      }
     })  

  }

}
