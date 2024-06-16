import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppExamApiService } from '../../../../Services/exam-app-services/app-exam-api.service';
import { ExamList } from '../../../../Services/Models/ExamModels/ExamDataModels';
import { SubSink } from 'subsink';
import { ExamRecordDialogComponent } from '../../../exam/exam-record-dialog/exam-record-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard-exam-list',
  standalone: true,
  imports: [
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
    MatProgressBarModule
  ],
  templateUrl: './dashboard-exam-list.component.html',
  styleUrl: './dashboard-exam-list.component.scss'
})
export class DashboardExamListComponent implements AfterViewInit {
  displayedColumns: string[] = ['exam', 'catandpub','action'];
  dataSource = new MatTableDataSource<ExamList>();
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  private _subSink = new SubSink();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dashboardApiService: AppExamApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dashboardApiService.get_ExamList_For_Dashboard().subscribe((result) => {
      console.log(result);
      this.dataSource.data = result;
      console.log(this.dataSource.data);
      this.progressBarMode = 'determinate';
      this.progressBarValue = 100;  // Change to desired value
    },
  (error) => {
    this.progressBarMode = 'determinate';
    this.progressBarValue = 100;  // Change to desired value
  });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  examDetailRecord(examUID: string){
    this._subSink.sink = this.dialog.open(ExamRecordDialogComponent,{
      data: examUID,
      disableClose:true,
      autoFocus:true,
      width:"100%",
      maxWidth:"100%",
      height:"auto",
      maxHeight:"100%"
    }).afterClosed().subscribe(result => {

    });
  }
}
