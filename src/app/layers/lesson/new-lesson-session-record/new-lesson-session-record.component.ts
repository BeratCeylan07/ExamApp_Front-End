import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExamNewSessionDialogComponent } from '../../exam/exam-new-session-dialog/exam-new-session-dialog.component';

@Component({
  selector: 'app-new-lesson-session-record',
  standalone: true,
  imports: [
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
  templateUrl: './new-lesson-session-record.component.html',
  styleUrl: './new-lesson-session-record.component.scss'
})
export class NewLessonSessionRecordComponent {
  private _subSink = new SubSink();
  constructor(
    private _lessonAPIService: AppExamApiService,
    public dialogRef: MatDialogRef<ExamNewSessionDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private _lessonUID: string
  ) {}
  teachers!: any;
  userID = Number(localStorage.getItem('userID'));
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 30;
  newLessonSessionFormGroup = new FormGroup({
      teacherUID: new FormControl("",[Validators.required]),
      baslangic: new FormControl("",[Validators.required]),
      bitis: new FormControl("",[Validators.required]),
      tarih: new FormControl("",[Validators.required]),
      lessonUID: new FormControl(this._lessonUID,[Validators.required]),
      userID: new FormControl(this.userID)
  });
  getTeacherList(): void{
    this._subSink.sink = this._lessonAPIService.get_teacherList().subscribe({
      next: (result) => {
        this.teachers = result;
      },
      error: (error) => {
      },
      complete: () => {
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;
      }
    });
  }
  newLessonSession(): void {
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;
    this._subSink.sink = this._lessonAPIService.post_new_lessonSession(this.newLessonSessionFormGroup.value).subscribe({
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
    this.getTeacherList();
  }
}
