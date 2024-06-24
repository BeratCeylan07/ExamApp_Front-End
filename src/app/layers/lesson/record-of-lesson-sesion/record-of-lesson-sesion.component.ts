import { User } from './../../../Services/Models/LessonModels/Lesson_Record_Model';
import { CommonModule } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ExamSessionListComponent } from '../../exam/exam-session-list/exam-session-list.component';
import { ExamSessionStudentListForSessionComponent } from '../../exam/exam-session-student-list-for-session/exam-session-student-list-for-session.component';
import { ExamSessionStudentListComponent } from '../../exam/exam-session-student-list/exam-session-student-list.component';
import { LogListComponent } from '../../log-list/log-list.component';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TeacherSelectListComponent } from "../teacher-select-list/teacher-select-list.component";
import { MatSelectModule } from '@angular/material/select';
import { RecordOfLessonComponent } from '../record-of-lesson/record-of-lesson.component';
import { DataChangeModel } from '../../../Services/Models/LessonModels/record-data-change.model';
import { lessonRecordModel } from '../../../Services/Models/LessonModels/Lesson_Record_Model';
import { StudentListOfLessonSessionComponent } from "../student-list-of-lesson-session/student-list-of-lesson-session.component";

@Component({
    selector: 'app-record-of-lesson-sesion',
    standalone: true,
    templateUrl: './record-of-lesson-sesion.component.html',
    styleUrl: './record-of-lesson-sesion.component.scss',
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
        MatPaginatorModule,
        TeacherSelectListComponent,
        MatSelectModule,
        StudentListOfLessonSessionComponent
    ]
})
export class RecordOfLessonSesionComponent {
  
  private _subSink = new SubSink();
  _isLoading = true;
  teachers: any;
  userID = localStorage.getItem("userID");
  subeID = localStorage.getItem("subeID");
  wait = true;
  lessonSessionInfo: lessonRecordModel = {
    id: 0,
    uid: '',
    dersid: 0,
    teacherid: 0,
    tarih: '',
    baslangic: '',
    bitis: '',
    isCreatedUserId: 0,
    isCreatedUser: undefined,
    isCreatedDate: '',
    isModifiedUserId: 0,
    isModifiedUser: undefined,
    isModifiedDate: '',
    isActive: true,
    ders: undefined,
    dersOturumUserSets: [],
    teacher: undefined
  };
  lessonSessionInStudent = new MatTableDataSource<any>(); // Initialize the dataSource
  displayedColumns: string[] = [
    'kayitTarih',
    'student',
    'status',
    'action'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialogRef: MatDialogRef<RecordOfLessonSesionComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogInput: DataChangeModel,
    private _lessonSessionAPIService: AppExamApiService,
    public dialog: MatDialog
  ) {}
  teacherNameSurname = "";
  teacherChange = false;
  lessonSessionUID = "";
  ngOnInit(): void {
    this.getLessonSessionInfo();
 
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
    this.dialogInput = {
      teacherModel: [],
      lessonSessionUID: ""
    };
  }
  getLessonSessionInfo(): void{
    this._subSink.sink = this._lessonSessionAPIService.get_sessionofLesson_info(this.dialogInput.lessonSessionUID).subscribe({
      next: (result) => {

        if (this.dialogInput.teacherModel.length != 0) {
          this.lessonSessionInfo = result;
          this.lessonSessionInStudent.data = result.dersOturumUserSets;
          this.lessonSessionInfo.teacher = this.dialogInput.teacherModel;
          this.teacherNameSurname = this.lessonSessionInfo.teacher?.ad + " " + this.lessonSessionInfo.teacher?.soyad;
          this.lessonSessionUID = this.lessonSessionInfo.uid;
          this.wait = false;
        }else{
          this.lessonSessionInfo = result;
          this.lessonSessionInStudent.data = result.dersOturumUserSets;
          this.teacherNameSurname = this.lessonSessionInfo.teacher?.ad + " " + this.lessonSessionInfo.teacher?.soyad;
          this.lessonSessionUID = this.lessonSessionInfo.uid;
          this.wait = false;

        }
      },
      error: (error) => {

      },
      complete: () => {
        this._isLoading = false;
        
      }
    })
  }
  sessionInfoUpdate(): void{
    
  }
  sessionRecordReload(): void{
    
  }
  openTeacherListDialog(): void{
    this.dialog.open(TeacherSelectListComponent,{
      data:this.dialogInput,
      autoFocus:true,
      disableClose:true,
      maxHeight:"60%"
    }).afterClosed().subscribe((result) => {
      this.teacherChange = true;
    });
    this.dialogRef.close();
  }
  MatDialogClose() : void{
    this.dialogRef.close();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.lessonSessionInStudent.filter = filterValue.trim().toLowerCase();

    if (this.lessonSessionInStudent.paginator) {
      this.lessonSessionInStudent.paginator.firstPage();
    }
  }
  ngAfterViewInit(): void {
    this.lessonSessionInStudent.paginator = this.paginator;
    this.lessonSessionInStudent.sort = this.sort;
  }
}
