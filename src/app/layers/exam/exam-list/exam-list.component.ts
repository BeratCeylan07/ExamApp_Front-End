import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ExamInList } from '../../../Services/Models/ExamModels/ExamDataModels';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExamRecordDialogComponent } from '../exam-record-dialog/exam-record-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-exam-list',
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
    MatPaginator
  ],
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.scss'
})
export class ExamListComponent implements AfterViewInit  {
  displayedColumns: string[] = ['examInfo', 'catAndPub','examLocation', 'action'];
  dataSource = new MatTableDataSource<ExamInList>(); // Initialize the dataSource
  private _subSink = new SubSink();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private examAPIService: AppExamApiService, public dialog: MatDialog) {}


  ngOnInit(): void {
    this.getExamList();
  }

  ngAfterViewInit() {
    // Check if dataSource has been initialized before setting paginator and sort
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getExamList() {
    this._subSink.sink = this.examAPIService.get_ExamList_For_ExamComp().subscribe((result) => {
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(result);
    },
    (error) => {
      console.log(error);
    });
  }

  examDetailRecord(examUID: string){
    this._subSink.sink = this.dialog.open(ExamRecordDialogComponent,{
      data: examUID,
      disableClose:true,
      autoFocus:true,
      width:"auto",
      height:"auto",
      maxWidth:"100%",
      maxHeight:"95%"
    }).afterClosed().subscribe(result => {
      // tekrar istek at
    });
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }
}
