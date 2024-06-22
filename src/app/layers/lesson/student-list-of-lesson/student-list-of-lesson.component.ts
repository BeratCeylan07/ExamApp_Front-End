import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { RecordOfLessonComponent } from '../record-of-lesson/record-of-lesson.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-student-list-of-lesson',
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
    MatProgressBarModule
  ],
  templateUrl: './student-list-of-lesson.component.html',
  styleUrl: './student-list-of-lesson.component.scss'
})
export class StudentListOfLessonComponent implements AfterViewInit {
  @Input() lessonUID: string = '';
  displayedColumns: string[] = [
    'student',
    'oturum',
    'kayitTarih',
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
    private _lessonRecord: RecordOfLessonComponent
  ) {}

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
          console.log(result);
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
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }


}
