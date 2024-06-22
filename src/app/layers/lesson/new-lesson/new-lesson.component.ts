import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxMaskDirective } from 'ngx-mask';
import { SubSink } from 'subsink/dist/subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { NewExamDialogComponent } from '../../exam/new-exam-dialog/new-exam-dialog.component';

@Component({
  selector: 'app-new-lesson',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    NgxMaskDirective
  ],
  templateUrl: './new-lesson.component.html',
  styleUrl: './new-lesson.component.scss'
})
export class NewLessonComponent {
  constructor(public dialogRef: MatDialogRef<NewExamDialogComponent>, public dialog: MatDialog, private _lessonAPIService: AppExamApiService) {}
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  private _subSink = new SubSink();

  userID = localStorage.getItem("userID");
  subeID = localStorage.getItem("subeID");
  newLessonData = {
    dersAd: "",
    bilgi:"",
    subeID: Number(this.subeID),
    userID: Number(this.userID)
  }
  
  ngOnInit(): void {
    console.log(this.newLessonData);
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;
  }
  newLesson(): void{
    this._subSink.sink = this._lessonAPIService.post_new_lesson(this.newLessonData).subscribe({
      next: (result) => {
        this.dialogRef.close();
      },
      error: (error) => {

      },
      complete: () => {

      }
    })
  }
}
