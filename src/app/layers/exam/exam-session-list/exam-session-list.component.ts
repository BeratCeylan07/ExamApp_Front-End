import { MediaMatcher } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { CommonModule } from '@angular/common';
import { ExamNewSessionDialogComponent } from '../exam-new-session-dialog/exam-new-session-dialog.component';
import { ExamRecordDialogComponent } from '../exam-record-dialog/exam-record-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ExamSessionRecordDialogComponent } from '../exam-session-record-dialog/exam-session-record-dialog.component';

@Component({
  selector: 'app-exam-session-list',
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
  templateUrl: './exam-session-list.component.html',
  styleUrl: './exam-session-list.component.scss',
})
export class ExamSessionListComponent implements AfterViewInit {
  @Input() examUID: string = '';
  displayedColumns: string[] = [
    'oturumNo',
    'tarih',
    'kontenjan',
    'kayitliToplam',
    'guncelKontenjan',
    'durum',
    'action',
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
    private _examRecordDialog: ExamRecordDialogComponent
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
      .get_SessionListOfExam(this.examUID)
      .subscribe({
        next: (result) => {
          this.dataSource.data = result;
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
  newSession(): void {
    this._examRecordDialog.newSession();
  }
  examSessionRecord(examSessionUID: string): void {
    this.dialog.open(ExamSessionRecordDialogComponent,{
      data: examSessionUID,
      autoFocus: true,
      disableClose:true,
      width:"auto",
      height:"auto"
    }).afterClosed().subscribe((result) => {
        this.getSessionList();
        this._examRecordDialog.examRecordReload();
    });
  }
}
