import { DatePipe } from '@angular/common';
import { Component, Inject, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExamPipe } from '../../../exam.pipe';
import { ExamRecordDialogComponent } from '../exam-record-dialog/exam-record-dialog.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { ExamSessionStudentListModel } from '../../../Services/Models/ExamModels/ExamDataModels';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { ExamSessionRecordDialogComponent } from '../exam-session-record-dialog/exam-session-record-dialog.component';
import { ExamStudentSetInExamSessionComponent } from '../exam-student-set-in-exam-session/exam-student-set-in-exam-session.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam-session-student-list-for-session',
  standalone: true,
  imports: [
    FormsModule,
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
    MatProgressBarModule,
    DatePipe,
    ExamPipe,
    ExamRecordDialogComponent,
    MatMenuModule
  ],
  templateUrl: './exam-session-student-list-for-session.component.html',
  styleUrl: './exam-session-student-list-for-session.component.scss'
})
export class ExamSessionStudentListForSessionComponent {
  // get_StudentListForSession
  @Input() sessionUID: string = '';
  displayedColumns: string[] = ['isCreatedDate','isActive','status','student','d','y','n','actions'];
  dataSource = new MatTableDataSource<ExamSessionStudentListModel>(); // Initialize the dataSource
  private _subSink = new SubSink();
  isLoading = true;
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  sessionScoreSetDsb = true;

  constructor(private _apiService: AppExamApiService, public dialog: MatDialog, private _examSessionRecordComp: ExamSessionRecordDialogComponent) {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    console.log(this.sessionUID);
    this.getList();
  }
  getList() {
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 30;
     this._subSink.sink = this._apiService.get_StudentListForSession(this.sessionUID).subscribe({
      next: (result) => {
        this.dataSource.data = result.$values;
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;
        console.log(this.dataSource.data);

      },
      error: (error) => {
        console.log(error); 
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data:{
            title:"hata Oluştu",
            message: error.message
          },
          disableClose:false,
          autoFocus:true,
          width:"auto",
          height:"auto"
        });
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;  // Change to desired value
        console.log(error);
      },
      complete: () => {

      }
    });
  }
  studentYoklamaset(_status: number, _studentSessionSetUID: string){

    const studentYoklamaModel = {
      status: _status,
      studentSessionSetUID: _studentSessionSetUID
    }
    console.log(studentYoklamaModel);
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 30;
    this._subSink.sink = this._apiService.post_StudentYoklama(studentYoklamaModel).subscribe({
      next: (result) => {
          this._examSessionRecordComp.sessionRecordReload();
      },
      error: (error) => {
          this.dialog.open(ResultMessageBoxDialogComponent,{
            data: {
              title: "Hata Oluştu",
              message: error.message
            },
            autoFocus:true
          });
      },
      complete: () => {
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;
        this.getList();
      }
    })
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  studentSet(): void {
    this._subSink.sink = this.dialog.open(ExamStudentSetInExamSessionComponent,{
      data:this.sessionUID,
      autoFocus: true,
      disableClose: true,
      width:"auto",
      height:"auto"
    }).afterClosed().subscribe((result) => {
        this._examSessionRecordComp.sessionRecordReload();
    })
  }
  studentSessionScoreSet(row: any){
    console.log("giden model:",row);
    const scoreModel = {
      sessionSetUID: row.sessionSetUID,
      d: row.dogru,
      y: row.yanlis
    }
    console.log(scoreModel);
    this._subSink.sink = this._apiService.post_sessionSetScore(scoreModel).subscribe({
      next: (result) => {
        
      },
      error: (error) => {

      },
      complete: () => {
        this.getList();
      }
    })
  }
  rowChangeTrue(): void {
    this.sessionScoreSetDsb = false;
  }
}
