import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubSink } from 'subsink';
import { DataChangeModel } from '../../../Services/Models/LessonModels/record-data-change.model';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { RecordOfLessonSesionComponent } from '../record-of-lesson-sesion/record-of-lesson-sesion.component';
import { RecordOfLessonComponent } from '../record-of-lesson/record-of-lesson.component';

@Component({
  selector: 'app-student-list-of-lesson-session',
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
  templateUrl: './student-list-of-lesson-session.component.html',
  styleUrl: './student-list-of-lesson-session.component.scss'
})
export class StudentListOfLessonSessionComponent {
  @Input() lessonSessionUID: string = '';
  displayedColumns: string[] = [
    'kayitTarih',
    'ad',
    'soyad',
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
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.getStudentList();
  }
  getStudentList(): void {
    console.log("giden UID",this.lessonSessionUID)
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 100;
    this._subSink.sink = this._examAPIService
      .get_studentListOfLessonSession(this.lessonSessionUID)
      .subscribe({
        next: (result) => {
          this.dataSource.data = result.$values;
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
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }

}
