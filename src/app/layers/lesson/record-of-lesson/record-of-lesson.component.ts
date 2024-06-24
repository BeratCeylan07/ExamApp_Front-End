import { SessionListOfLessonComponent } from './../session-list-of-lesson/session-list-of-lesson.component';
import { CommonModule } from '@angular/common';
import { Component, Inject, ViewChild, viewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ExamRecordDialogComponent } from '../../exam/exam-record-dialog/exam-record-dialog.component';
import { ExamSessionListComponent } from '../../exam/exam-session-list/exam-session-list.component';
import { ExamSessionStudentListComponent } from '../../exam/exam-session-student-list/exam-session-student-list.component';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { StudentListOfLessonComponent } from "../student-list-of-lesson/student-list-of-lesson.component";
import { TeacherSelectListComponent } from "../teacher-select-list/teacher-select-list.component";
import { NewLessonSessionRecordComponent } from '../new-lesson-session-record/new-lesson-session-record.component';
import { StudentLessonSetInLessonRecordComponent } from '../student-lesson-set-in-lesson-record/student-lesson-set-in-lesson-record.component';

@Component({
    selector: 'app-record-of-lesson',
    standalone: true,
    templateUrl: './record-of-lesson.component.html',
    styleUrl: './record-of-lesson.component.scss',
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
        MatListModule,
        SessionListOfLessonComponent,
        StudentListOfLessonComponent,
        TeacherSelectListComponent
    ]
})
export class RecordOfLessonComponent {
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;

  private _subSink = new SubSink();
  _isLoading = true;
  constructor(
    public dialogRef: MatDialogRef<ExamRecordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public lessonUID: string,
    private _lessonAPIService : AppExamApiService,
    public dialog: MatDialog
  ) {}
  @ViewChild(SessionListOfLessonComponent) sesionList!: SessionListOfLessonComponent;
  @ViewChild(StudentListOfLessonComponent) studentList!: StudentListOfLessonComponent;

  examSums: any = {
    toplamOturum: 0,
    toplamKayitliOgrenci: 0,
    toplamKitapcik: 0,
    toplamMaliyet: 0,
    guncelCiro: 0,
    netKar: 0,
  };

  lessonFormGroup = new FormGroup({
    uid: new FormControl("",Validators.required),
    dersAd: new FormControl("",Validators.required),
    bilgi: new FormControl("")
  })

  lessonInfo!: any;
  lessonSums!: any;
  
  ngOnInit(): void {
    this.getLessonDetail();
    this.getLessonSums();
    setTimeout(() => {
      this._isLoading = false;
    }, 1500);
  }
  newLessonSessionDialogOpen(): void{
    this._subSink.sink = this.dialog.open(NewLessonSessionRecordComponent,{
      data:this.lessonUID,
      width:"500px",
      height:"auto",
      disableClose:true,
      autoFocus:true
    }).afterClosed().subscribe((result) => {
      if(result)
        this.getLessonDetail();
    });
  }
  newLessonSessionStudentSetDialog(): void{
    this._subSink.sink = this.dialog.open(StudentLessonSetInLessonRecordComponent,{
      data:this.lessonUID,
      width:"700px",
      height:"auto",
      disableClose:true,
      autoFocus:true
    }).afterClosed().subscribe((result) => {
      if(result)
        this.getLessonDetail();
    });
  }
  getLessonDetail(): void{
      this._subSink.sink = this._lessonAPIService.get_lesson_detail(this.lessonUID).subscribe({
        next: (result) => {
            this.lessonInfo = result;
        },
        error: (error) => {
            this.dialog.open(ResultMessageBoxDialogComponent,{
              data:{
                title: "Hata Oluştu",
                message: error.message
              }
            });
        },
        complete: () => {
            this.sesionList.getSessionList();
            this.studentList.getStudentList();
        }
      })
  }
  getLessonSums(): void{
    this._subSink.sink = this._lessonAPIService.get_lessonSums(this.lessonUID).subscribe({
      next: (result) => {
          this.lessonSums = result;
      },
      error: (error) => {
          this.dialog.open(ResultMessageBoxDialogComponent,{
            data:{
              title: "Hata Oluştu",
              message: error.message
            }
          });
      },
      complete: () => {

      }
    })
    
  }
  openTeacherListDialog(): void{
    this.dialog.open(TeacherSelectListComponent,{
      width:"auto",
      height:"auto",
      autoFocus:true,
      disableClose:true
    });
  }
  dialogClose(): void{
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }
}
