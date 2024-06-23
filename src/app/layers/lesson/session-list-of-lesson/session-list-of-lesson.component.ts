import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input, NgZone, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ExamRecordDialogComponent } from '../../exam/exam-record-dialog/exam-record-dialog.component';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { RecordOfLessonComponent } from '../record-of-lesson/record-of-lesson.component';
import { RecordOfLessonSesionComponent } from '../record-of-lesson-sesion/record-of-lesson-sesion.component';
import { DataChangeModel } from '../../../Services/Models/LessonModels/record-data-change.model';

@Component({
  selector: 'app-session-list-of-lesson',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatPaginator,
    MatProgressBarModule,
  ],
  templateUrl: './session-list-of-lesson.component.html',
  styleUrl: './session-list-of-lesson.component.scss'
})

export class SessionListOfLessonComponent implements AfterViewInit {
  @Input() lessonUID: string = '';
  displayedColumns: string[] = [
    'tarih',
    'teacher',
    'baslangic',
    'bitis',
    'toplamKayit',
    'durum',
    'action'
  ];
  dataSource = new MatTableDataSource<any>(); // Initialize the dataSource
  private _subSink = new SubSink();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _examAPIService: AppExamApiService,
    public dialog: MatDialog,
    private _lessonRecord: RecordOfLessonComponent,
    private ngZone: NgZone,
    
  ) {}
  changeDataModel: DataChangeModel = {
    lessonSessionUID: '',
    teacherModel: []
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.getSessionList();
  }
  getSessionList(): void {
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 100;
    this._subSink.sink = this._examAPIService
      .get_lesson_session_list(this.lessonUID)
      .subscribe({
        next: (result) => {
          this.dataSource.data = result;
          console.log("ders oturumlar: ",result);
        },
        error: (error) => {
          this.dialog.open(ResultMessageBoxDialogComponent, {
            data: {
              title: 'Hata Oluştu',
              message: error.message,
            },
          });
        },
        complete: () => {
          this.progressBarMode = 'determinate';
          this.progressBarValue = 100;
        },
      });
  }
  getSessionRecord(lessonSessionUID: string){
      this.changeDataModel.lessonSessionUID = lessonSessionUID

      this.dialog.open(RecordOfLessonSesionComponent,{
        data:this.changeDataModel,
        autoFocus:true,
        disableClose:true
      });

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }


}
