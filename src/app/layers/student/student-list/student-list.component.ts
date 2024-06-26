import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserListModel } from '../../../Services/Models/StudentModels/StudentDataModel';
import { RecordOfStudentComponent } from '../record-of-student/record-of-student.component';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-student-list',
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
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'surname', 'phone', 'action'];
  dataSource = new MatTableDataSource<UserListModel>();
  private _subsink = new SubSink();
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;

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
  constructor(public _dialog: MatDialog, private _cdr: ChangeDetectorRef, media: MediaMatcher, private _studentApiservice: AppExamApiService) {  }
  openRecordOfStudent(userUID: string){
    this.newstudentRecordDialog(userUID);
  }
  newstudentRecordDialog(userUID: string){
    this._subsink.sink = this._dialog.open(RecordOfStudentComponent, {
      data:userUID,
      disableClose:true,
      autoFocus:true,
      maxWidth:"100%",
      width:"100%",
      maxHeight:"100%",
      height:"auto",
    }).afterClosed().subscribe(result => {
      // tekrar istek at
    });
  }
  getStudentList(){
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 40;  // Change to desired value
    this._studentApiservice.get_UserList_For_UserLayer().subscribe((result) => {
      this.dataSource.data = result.$values;
     
      this.progressBarMode = 'determinate';
      this.progressBarValue = 100;  // Change to desired value


      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    (error) => {
      this.progressBarMode = 'determinate';
      this.progressBarValue = 100;  // Change to desired value
    });
  }
  ngOnInit(): void {
    this.getStudentList();    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

