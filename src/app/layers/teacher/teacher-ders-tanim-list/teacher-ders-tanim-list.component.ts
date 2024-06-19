import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SubSink } from 'subsink';
import { UserListModel } from '../../../Services/Models/StudentModels/StudentDataModel';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { RecordOfStudentComponent } from '../../student/record-of-student/record-of-student.component';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExamPipe } from '../../../exam.pipe';

@Component({
  selector: 'app-teacher-ders-tanim-list',
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
    MatMenuModule,
    FormsModule
  ],
  templateUrl: './teacher-ders-tanim-list.component.html',
  styleUrl: './teacher-ders-tanim-list.component.scss'
})
export class TeacherDersTanimListComponent {
  @Input() teacherUID: string = '';
  displayedColumns: string[] = ['tarih', 'baslangic', 'bitis', 'ders', 'action'];
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
  constructor(public _dialog: MatDialog, private _cdr: ChangeDetectorRef, media: MediaMatcher, private _lessonAPIService: AppExamApiService) {  }


  getTeacherDersTanimList(){
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 40;  // Change to desired value

    this._lessonAPIService.get_teacher_session_setList(this.teacherUID).subscribe({
      next: (result) => {
        this.dataSource.data = result;
        console.log(this.dataSource.data);
        this.progressBarMode = 'determinate';
        this.progressBarValue = 100;  // Change to desired value
      },
      error: (error) => {
        this._dialog.open(ResultMessageBoxDialogComponent,{
          data: {
            title: "Hata Oluştu",
            message: error.message,
          }
        })
      }
    })
  }
  ngOnInit(): void {
    this.getTeacherDersTanimList();    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
