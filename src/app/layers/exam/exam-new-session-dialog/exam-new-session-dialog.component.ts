import { AfterViewInit, Component, Inject, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ExamSessionListComponent } from '../exam-session-list/exam-session-list.component';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { SubSink } from 'subsink';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { ExamRecordDialogComponent } from '../exam-record-dialog/exam-record-dialog.component';

@Component({
  selector: 'app-exam-new-session-dialog',
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
    MatDatepickerModule,
    MatCardModule
  ],
  templateUrl: './exam-new-session-dialog.component.html',
  styleUrl: './exam-new-session-dialog.component.scss'
})
export class ExamNewSessionDialogComponent implements AfterViewInit  {

  @ViewChild(ExamSessionListComponent)
  childComponent!: ExamSessionListComponent;

  constructor(public dialogRef: MatDialogRef<ExamNewSessionDialogComponent>, public dialog: MatDialog, private _examAPIService: AppExamApiService,@Inject(MAT_DIALOG_DATA) private _examUID: string) {}
  private _subSink = new SubSink();
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
 
  newExamFormGroup = new FormGroup({
    tarih: new FormControl(Date,Validators.required),
    kontenjan: new FormControl(0,Validators.required),
    bilgi: new FormControl('')
  });

  newSessionModel = {
    examuid: this._examUID,
    sessioninfo: '',
    kontenjan: 0,
    userid: localStorage.getItem("userID"),
    examdate: Date,
  }
  
  MatDialogClose(){
    this.dialogRef.close();
  }
  ngAfterViewInit(): void {

  }
  ngAfterContentInit(): void {
    
  }
  ngOnInit(): void {
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;
  }
  addNewSession(): void{
    this._subSink.sink = this._examAPIService.post_NewSessionOfExam(this.newSessionModel).subscribe({
      next: (result) => {
        this.progressBarMode = 'indeterminate';
        this.progressBarValue = 30;
          setTimeout(() => {
            this.progressBarMode = 'determinate';
            this.progressBarValue = 100;
            this.dialogRef.close();
          }, 1500);
          
      },
      error: (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data: {
            title:"Hata Oluştu",
            message: error.ex,
          },
          width:"auto",
          height:"auto",
          autoFocus:true,
          disableClose:true
        });
      },
      complete: () => {

      }
    });
  }
}
