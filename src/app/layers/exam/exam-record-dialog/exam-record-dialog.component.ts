import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  Validators,
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
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { SubSink } from 'subsink';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { ExamEditModel, ExamRecordModel } from '../../../Services/Models/ExamModels/ExamDataModels';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ExamSessionStudentListComponent } from '../exam-session-student-list/exam-session-student-list.component';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ExamUserSetDialogComponent } from '../exam-user-set-dialog/exam-user-set-dialog.component';
import { ExamSessionListComponent } from "../exam-session-list/exam-session-list.component";
import { ExamNewSessionDialogComponent } from '../exam-new-session-dialog/exam-new-session-dialog.component';
import { MatList, MatListModule } from '@angular/material/list';
import { ExamUserWpLogsComponent } from '../exam-user-wp-logs/exam-user-wp-logs.component';
import { LogListComponent } from "../../log-list/log-list.component";

@Component({
    selector: 'app-exam-record-dialog',
    standalone: true,
    templateUrl: './exam-record-dialog.component.html',
    styleUrl: './exam-record-dialog.component.scss',
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
        LogListComponent
    ]
})
export class ExamRecordDialogComponent implements AfterViewInit {
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  userPersonelInfoForm: any;
  base64Image = "data:image/jpeg;base64,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";

  private _subSink = new SubSink();
  _isLoading = true;
  constructor(
    public dialogRef: MatDialogRef<ExamRecordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public examUID: string,
    private _examApiservice: AppExamApiService,
    public dialog: MatDialog
  ) {}
  @ViewChild(ExamSessionStudentListComponent)
  childComponent!: ExamSessionStudentListComponent;
  @ViewChild(ExamSessionListComponent)
  childComponentSession!: ExamSessionListComponent;
  examSums: any = {
    toplamOturum: 0,
    toplamKayitliOgrenci: 0,
    toplamKitapcik: 0,
    toplamMaliyet: 0,
    guncelCiro: 0,
    netKar: 0,
  };
  examInfo: any = {
    userID: Number(localStorage.getItem('userID')),
    uid: this.examUID,
    isActive: true,
    subeid: Number(localStorage.getItem('subeID')),
    denemeAdi: '',
    sinavKategori: '',
    yayinAdi: '',
    yayinLogo: this.base64Image,
    sinavYeri: '',
    ucret: 0,
    kitapcikToplam: 0,
    kitapcikAdetMaliyet: 0,
    isCreatedUser: null,
    isCreatedDate: new Date(),
    isModifiedUser: null,
    isModifiedDate: new Date(),
  }
  

  newExamFormGroup = new FormGroup({
    uid: new FormControl(this.examUID, Validators.required),
    denemeAdi: new FormControl('', Validators.required),
    sinavKategori: new FormControl('', Validators.required),
    yayinAdi: new FormControl('', Validators.required),
    yayinLogo: new FormControl(''),
    ucret: new FormControl(0, Validators.required),
    sinavYeri: new FormControl('', Validators.required),
    kitapcikToplam: new FormControl(0),
    kitapcikAdetMaliyet: new FormControl(0),
    isCreatedDate: new FormControl(new Date(), Validators.required),
    isModifiedDate: new FormControl(new Date(), Validators.required),
    isCreatedUserid: new FormControl(0, Validators.required),
    isModifiedUserid: new FormControl(0, Validators.required),
    isActive: new FormControl(true, Validators.required),
  });
  ngOnInit(): void {
    this.getExamInfo();
  }
  ngAfterViewInit(): void {}
  MatDialogClose() {
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }
  getExamInfo() {
    this._subSink.sink = this._examApiservice
      .get_ExamRecordData(this.examUID)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.base64Image = res.yayinLogo;
          this.examInfo = res;
          this.examInfo.userID = Number(localStorage.getItem('userID'));
          console.log("examinfo control:", this.examInfo);
        },
        error: (error) => {
          this.dialog.open(ResultMessageBoxDialogComponent, {
            data: {
              title: 'Hata',
              message: 'Lütfen Tekrar Deneyiniz',
            },
          });
          console.log(error);
        },
        complete: () => {
          this._subSink.sink = this._examApiservice
            .get_ExamSumsData(this.examUID)
            .subscribe({
              next: (res) => {
                this.examSums = res;
                this._isLoading = false;
                console.log("sum, response: ",res);
                console.log("sumModel: ", this.examSums);
              },
              error: (error) => {
                console.log(error);
              },
              complete: () => {
                this._isLoading = false;
              },
            });
        },
      });
      this.childComponent.getList();
      this.childComponentSession.getSessionList();
  }
  examInfoUpdate(): void {
    console.log("update post model: ", this.examInfo);
    const exam_update_model = {
      examID: 0,
      subeID: this.examInfo.subeid,
      isActive: this.examInfo.isActive,
      subeid: this.examInfo.subeid,
      userID: this.examInfo.userID,
      examUID: this.examInfo.uid,
      denemeAdi: this.examInfo.denemeAdi,
      sinavKategori: this.examInfo.sinavKategori,
      yayinAdi: this.examInfo.yayinAdi,
      yayinLogo: this.examInfo.yayinLogo,
      ucret: this.examInfo.ucret,
      kitapcikToplam: this.examInfo.kitapcikToplam,
      sinavYeri: this.examInfo.sinavYeri,
      kitapcikAdetMaliyet: this.examInfo.kitapcikAdetMaliyet
    }
    this._isLoading = true;
    this._subSink.sink = this._examApiservice
    .post_ExamUpdate(exam_update_model)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.examRecordReload();
      },
      error: (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent, {
          data: {
            title: 'Hata',
            message: 'Lütfen Tekrar Deneyiniz',
          },
        });
        console.log(error);
        this._isLoading = false;
      },
      complete: () => {
        this._isLoading = false;
      },
    });  }
  examRecordReload() {
    this._isLoading = true;
    this.getExamInfo();
  }
  userSetExamSession(): void {
    this.dialog
      .open(ExamUserSetDialogComponent, {
        data: this.examUID,
        disableClose: false,
        autoFocus: true,
        width: '600px',
        height: 'auto',
      })
      .afterClosed()
      .subscribe((result) => {
        this.getExamInfo();
      });
  }
  newSession(): void {
    const _examUID = this.examUID;
    console.log(_examUID);
    this.dialog
      .open(ExamNewSessionDialogComponent, {
        data: _examUID,
        autoFocus: true,
        disableClose: true,
        width: 'auto',
        height: 'auto',
      }).afterClosed().subscribe((result) => {
        this.getExamInfo();
      });
  }
  examWpLogs(): void{
    this.dialog.open(ExamUserWpLogsComponent,{
      data:this.examUID,
      disableClose:false,
      autoFocus: true,
      width:"auto",
      height:"auto"
    });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.examInfo.yayinLogo = String(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }
}
