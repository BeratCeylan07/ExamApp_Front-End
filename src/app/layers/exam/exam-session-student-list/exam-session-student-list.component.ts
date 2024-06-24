import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { StudentExamListModel } from '../../../Services/Models/StudentModels/StudentDataModel';
import { DatePipe } from '@angular/common';
import { ExamPipe } from "../../../exam.pipe";
import { ExamSessionStudentListModel, StudentYoklamaModel } from '../../../Services/Models/ExamModels/ExamDataModels';
import { SubSink } from 'subsink';
import { MatDialog } from '@angular/material/dialog';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { ExamRecordDialogComponent } from '../exam-record-dialog/exam-record-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam-session-student-list',
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
    MatProgressBarModule,
    DatePipe,
    ExamPipe,
    ExamRecordDialogComponent,
    MatMenuModule,
    FormsModule
  ],
  templateUrl: './exam-session-student-list.component.html',
  styleUrl: './exam-session-student-list.component.scss'
})
export class ExamSessionStudentListComponent implements AfterViewInit {
  @Input() examUID: string = '';
  displayedColumns: string[] = ['isCreatedDate','isActive','status','student','session','d','y','n','actions'];
  dataSource = new MatTableDataSource<ExamSessionStudentListModel>(); // Initialize the dataSource
  private _subSink = new SubSink();
  isLoading = true;
  sessionScoreSetDsb = true;
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private _apiService: AppExamApiService, public dialog: MatDialog, private _examRecordComp: ExamRecordDialogComponent) {}
  ngOnInit(): void {
    this.getList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  rowChangeTrue(): void {
    this.sessionScoreSetDsb = false;
  }
  getList() {
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 30;
     this._subSink.sink = this._apiService.get_StudentlistInExamSession(this.examUID).subscribe({
      next: (result) => {
        this.dataSource.data = result.$values;
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;
        console.log("data:",this.dataSource.data);

      },
      error: (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data:{
            title:"hata Oluştu",
            message: error
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
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  userSetExamSession(): void {
    this._examRecordComp.userSetExamSession();
  }
  studentYoklamaset(_status: number, _studentSessionSetUID: string){

    const studentYoklamaModel = {
      status: _status,
      studentSessionSetUID: _studentSessionSetUID
    }

    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 30;
    this._subSink.sink = this._apiService.post_StudentYoklama(studentYoklamaModel).subscribe({
      next: (result) => {

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
}
