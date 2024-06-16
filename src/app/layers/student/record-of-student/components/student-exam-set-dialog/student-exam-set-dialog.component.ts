import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { EaxmRecordsOfStudentComponent } from '../eaxm-records-of-student/eaxm-records-of-student.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../../../Services/exam-app-services/app-exam-api.service';
import { ExamUserSetDialogComponent } from '../../../../exam/exam-user-set-dialog/exam-user-set-dialog.component';
import { RecordOfStudentComponent } from '../../record-of-student.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ExamInList } from '../../../../../Services/Models/ExamModels/ExamDataModels';
import { ResultMessageBoxDialogComponent } from '../../../../result-message-box-dialog/result-message-box-dialog.component';

@Component({
  selector: 'app-student-exam-set-dialog',
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
    MatProgressBarModule
  ],
  templateUrl: './student-exam-set-dialog.component.html',
  styleUrl: './student-exam-set-dialog.component.scss'
})
export class StudentExamSetDialogComponent implements AfterViewInit {

  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;

  private _subSink = new SubSink();
  _isLoading = true;
  wpBtn = true;
  sessionUID: any
  sessionOptData: any[] = [];
  examoptData: ExamInList[] = [];

  @ViewChild(RecordOfStudentComponent)
  studentRecord!: RecordOfStudentComponent;  
  constructor(
    public _dialogRef: MatDialogRef<StudentExamSetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public _studentUID: string,
    private _examApiservice: AppExamApiService,
    public dialog: MatDialog,
    private _formBuilder: FormBuilder
  ) {}
  firstFormGroup = new FormGroup({
    exam: new FormControl("",Validators.required),
  })
  secondFormGroup = new FormGroup({
    session: new FormControl("",Validators.required),
  })

  studentExamsetModel = {
    examSessionUID: "",
    studentUID: this._studentUID,
    userID: Number(localStorage.getItem("userID"))
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;
    this.examListForStudent();
  }
  examListForStudent(): void{
    this._isLoading = true;
    
    this._subSink.sink = this._examApiservice.get_ExamList_For_StudentSetOpt(this.studentExamsetModel.studentUID).subscribe({
      next: (result) => {
        this.examoptData = result;      
      },
      error: (error) => {

      },
      complete: () => {
        this._isLoading = false;
        this.sessionListForExam();
      }
    })
  }
  sessionListForExam(): void {
    this._isLoading = true;
    this._subSink.sink = this._examApiservice.get_SessionListOfExam(this.studentExamsetModel.examSessionUID).subscribe({
      next: (result) => {
        this.sessionOptData = result;
        console.log(this.sessionOptData);
      },
      error: (error) => {

      },
      complete: () => {
        this._isLoading = false;
      }
    })
  }
  userExamSet(): void{
    console.log("student exam set model: ",this.studentExamsetModel);
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 30;
    this._subSink.sink = this._examApiservice.post_StudentExamSet(this.studentExamsetModel).subscribe({
      next: (result) => {
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;
        this.wpBtn = false;
      },
      error: (error) => {
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data:{
            title:"Hata Oluştu",
            message:error.message,
          },
          disableClose:false,
          autoFocus: true,
          width:"auto",
          height:"auto"
        });
      },
      complete: () => {
          
      }
    })
  }
  
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }

}
