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
import { AppExamApiService } from '../../../../../Services/exam-app-services/app-exam-api.service';
import { StudentExamListModel } from '../../../../../Services/Models/StudentModels/StudentDataModel';
import { CommonModule, DatePipe } from '@angular/common';
import { ExamPipe } from "../../../../../exam.pipe";
import { MatMenuModule } from '@angular/material/menu';
import { ResultMessageBoxDialogComponent } from '../../../../result-message-box-dialog/result-message-box-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-eaxm-records-of-student',
    standalone: true,
    templateUrl: './eaxm-records-of-student.component.html',
    styleUrl: './eaxm-records-of-student.component.scss',
    imports: [
        CommonModule,
        MatFormFieldModule,
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
        MatMenuModule,
        MatIconModule
    ]
})
export class EaxmRecordsOfStudentComponent implements AfterViewInit {
  @Input() userUID: string = '';
  dataSource = new MatTableDataSource<StudentExamListModel>();
  isLoading = true;
  sessionScoreSetDsb = true;
  private _subSink = new SubSink();
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  displayedColumns: string[] = [
    'session',
    'isCreatedDate',
    'examName',
    'examCat',
    'examPub',
    'status',
    'isActive',
    'd',
    'y',
    'n',
    'actions'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  constructor(private _apiService: AppExamApiService, private dialog: MatDialog) {}
  currentDate = new Date();
  getList() {
    this._apiService.get_RecordOfExam_For_User(this.userUID).subscribe(
      (result) => {
        this.dataSource.data = result.$values;
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;  // Change to desired value
        console.log(result);
      },
      (error) => {
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;  // Change to desired value
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.getList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      sessionSetUID: row.uid,
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
