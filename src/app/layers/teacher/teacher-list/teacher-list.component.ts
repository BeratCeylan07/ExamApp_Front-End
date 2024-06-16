import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SubSink } from 'subsink';
import { UserListModel } from '../../../Services/Models/StudentModels/StudentDataModel';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { RecordOfStudentComponent } from '../../student/record-of-student/record-of-student.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-teacher-list',
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
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.scss'
})
export class TeacherListComponent {
  displayedColumns: string[] = ['name', 'surname', 'phone', 'brans' ,'action'];
  dataSource = new MatTableDataSource<UserListModel>();
  private _subsink = new SubSink();
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  role = 2;
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
  openRecordOfTeacher(userUID: string){
    this.studentRecordDialog(userUID);
  }
  studentRecordDialog(userUID: string){
    this._subsink.sink = this._dialog.open(RecordOfStudentComponent, {
      data:userUID,
      disableClose:true,
      autoFocus:true,
      width:"auto",
      height:"auto",
    }).afterClosed().subscribe(result => {
      // tekrar istek at
    });
  }
  getStudentList(){
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 40;  // Change to desired value
    this._studentApiservice.get_UserList_For_UserLayer().subscribe((result) => {
      this.dataSource.data = result;
     
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
