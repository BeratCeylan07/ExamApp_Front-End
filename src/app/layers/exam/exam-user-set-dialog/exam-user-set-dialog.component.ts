import { CommonModule, DatePipe } from '@angular/common';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { ExamSessionStudentListComponent } from '../exam-session-student-list/exam-session-student-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
@Component({
  selector: 'app-exam-user-set-dialog',
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
  templateUrl: './exam-user-set-dialog.component.html',
  styleUrl: './exam-user-set-dialog.component.scss',
})
export class ExamUserSetDialogComponent implements AfterViewInit {
  @ViewChild(ExamSessionStudentListComponent)
  childComponent!: ExamSessionStudentListComponent;

  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  wpMesaj!: string;
  private _subSink = new SubSink();
  _isLoading = true;
  isLinear = true;
  wpBtn = true;
  sessionUID: any;
  sessionOptData: any[] = [];
  studentOptData: any[] = [];
  examSetRes!: any;
  userID!: any;
  constructor(
    private _dialogRef: MatDialogRef<ExamUserSetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _examUID: string,
    private _examApiservice: AppExamApiService,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder
  ) {}
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  selectedExamSessionUID!: string;
  selectedStudentUID!: string;
  wpMsg!: string;
  ngOnInit(): void {
    this.getSessionList();
    this.firstFormGroup = this._formBuilder.group({
      sessionList: [this.sessionUID, Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      userList: ['', Validators.required],
    });
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;
  }

  ngAfterViewInit(): void {}

  setWpMsg(): void {
    let datePipe = new DatePipe('en-EN');

    const student = this.studentOptData.find(
      (x) => x.uid === this.selectedStudentUID
    );
    let studenTel = "+90" + JSON.stringify(student.tel).replaceAll(" ", "").replaceAll('"','');
    const exam = this.sessionOptData.find(
      (x) => x.uid === this.selectedExamSessionUID
    );

    const examDate = datePipe.transform(exam.tarih, 'dd.MM.yyyy - HH:mm');

    console.log("Öğrenci Telefonu: ", studenTel);
    this.wpMesaj = `Sn.${student.ad} ${student.soyad}%0ADeneme Sınavı Kaydınız Başarıyla Alınmıştır.%0AOturum Bilgileriniz:%0ASınav Adı: ${exam.denemeSinav.denemeAdi},%0AKategori: ${exam.denemeSinav.sinavKategori},%0AYayın: ${exam.denemeSinav.yayinAdi},%0ASınav Tarihi: ${examDate},%0ABaşarılar Dileriz..`;
    this.wpMsg = `whatsapp://send?text=${this.wpMesaj}&phone=${studenTel}`; 
    this.wpBtn = true;

    window.location.href = this.wpMsg;

    const wp_msg_model = {
      mesaj: this.wpMesaj,
      subeID: Number(localStorage.getItem('subeID')),
      userID: Number(localStorage.getItem('userID')),
      studentUID: this.selectedStudentUID
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
  getSessionList(): void {
    this._subSink.sink = this._examApiservice
      .get_SessionListOfExam(this._examUID)
      .subscribe({
        next: (result) => {
          this.sessionOptData = result;
          console.log(this.sessionOptData);
        },
        error: () => {},
        complete: () => {
          this._isLoading = false;
        },
      });
  }
  getStudentList(): void {
    this._isLoading = true;
    this._subSink.sink = this._examApiservice
      .get_StudentlistNotInExamSession(this._examUID)
      .subscribe({
        next: (result) => {
          this.studentOptData = result;
          this.isLinear = !this.isLinear;
          console.log(this.studentOptData);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this._isLoading = false;
        },
      });
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }
  studentSessionSet(): void {
    this.userID = localStorage.getItem('userID');
    const studentExamSetModel = {
      examSessionUID: this.selectedExamSessionUID,
      studentUID: this.selectedStudentUID,
      userUID: JSON.parse(this.userID)
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
        complete: () => {},
      });
    this.wpBtn = false;
  }
}
