import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../Services/exam-app-services/app-exam-api.service';
import { ExamRecordDialogComponent } from '../exam/exam-record-dialog/exam-record-dialog.component';

@Component({
  selector: 'app-log-list',
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
  templateUrl: './log-list.component.html',
  styleUrl: './log-list.component.scss',
})
export class LogListComponent implements AfterViewInit {
  @Input() UID: string = '';
  displayedColumns: string[] = [
    'tarih',
    'loguser',
    'baslik',
    'aciklama'
  ];
  dataSource = new MatTableDataSource<any>(); // Initialize the dataSource
  private _subSink = new SubSink();
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  subeID = localStorage.getItem('subeID');
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private _examAPIService: AppExamApiService,
    public dialog: MatDialog
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getLogList(): void {
    this._subSink.sink = this._examAPIService
      .get_Action_Logs(Number(this.subeID), this.UID)
      .subscribe({
        next: (result) => {
          console.log("xxxxx: ",result);
          this.dataSource.data = result.$values;
          this.progressBarMode = 'determinate';
          this.progressBarValue = 100;
        },
        error: (error) => {},
        complete: () => {},
      });
  }

  ngOnInit(): void {
    this.getLogList();
  }
}
