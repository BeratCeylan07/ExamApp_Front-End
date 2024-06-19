import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { RecordOfNewstudentComponent } from '../../student/record-of-newstudent/record-of-newstudent.component';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { SubSink } from 'subsink';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-record-of-newteacher',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './record-of-newteacher.component.html',
  styleUrl: './record-of-newteacher.component.scss'
})
export class RecordOfNewteacherComponent {
  private _subSink = new SubSink();
  newStudentData = {
    ad: '',
    soyad: '',
    telefon: '',
    eposta: '',
    subeID: Number(localStorage.getItem("subeID")),
    studentUID:'',
    dersUID:'',
    userID: Number(localStorage.getItem("userID"))
  };
  
  newTeacherFormGroup = new FormGroup({ 
    ad: new FormControl("",[Validators.required]),
    soyad: new FormControl("",[Validators.required]),
    tel: new FormControl("",[Validators.required]),
    eposta: new FormControl(""),
    dersUID: new FormControl("",[Validators.required]),
    subeID: new FormControl(this.newStudentData.subeID),
    userID: new FormControl(this.newStudentData.userID)
  });
  selectedLessonUID!: any;
  lessonOpt!: any;
  phoneMask = "000 000 00 00";
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  constructor(
    private _studentService: AppExamApiService,
    public dialogRef: MatDialogRef<RecordOfNewstudentComponent>,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;
    this.getLessonList();
  }
  getLessonList(): void {
    this._subSink.sink = this._studentService.get_lessonList().subscribe(
      (result) => {
        this.lessonOpt = result;
        console.log(result);
      },
      (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data:{
            title:"hata oluştu",
            message:error.message
          },
          width:"auto",
          height:"auto",
          autoFocus:true,
        })
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100; // Change to desired valu
      }
    );
  }
  ngOnDestory() : void {
    this._subSink.unsubscribe();
  }
  postUserData() {
    console.log(this.newTeacherFormGroup.value)
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 40;
    this._subSink.sink = this._studentService.post_Teacher(this.newTeacherFormGroup.value).subscribe(
      (result) => {
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100; // Change to desired value
        this.dialogRef.close();
      },
      (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data:{
            title:"hata oluştu",
            message:error.message
          },
          width:"auto",
          height:"auto",
          autoFocus:true,
        })
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100; // Change to desired valu
      }
    );
  }
}
