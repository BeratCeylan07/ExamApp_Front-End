import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
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
import { ExamInList } from '../../../Services/Models/ExamModels/ExamDataModels';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RecordOfLessonComponent } from '../record-of-lesson/record-of-lesson.component';

@Component({
  selector: 'app-lesson-list',
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
    MatPaginator,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss'
})
export class LessonListComponent {
  displayedColumns: string[] = ['dersAd', 'toplamOturum', 'toplamOgrenci', 'action'];
  dataSource = new MatTableDataSource<any>();
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

  getLessonList(){
    this.progressBarMode = 'indeterminate';
    this.progressBarValue = 40;  // Change to desired value
    this._studentApiservice.get_lessonList().subscribe({
      next: (result) => {
          this.dataSource.data = result;
          this.progressBarMode = 'determinate';
          this.progressBarValue = 100;
          console.log(result);
      },
      error: (error) => {
          this._dialog.open(ResultMessageBoxDialogComponent,{
            data:{
              title:"Hata Oluştu",
              message:error.message
            }
          })
      },
      complete: () => {

      }
    })
  }
  ngOnInit(): void {
    this.getLessonList();    
  }
  lessonRecord(lessonUID: string): void{
    this._dialog.open(RecordOfLessonComponent,{
      data:lessonUID,
      disableClose:true,
      autoFocus:true,
      width:"auto",
      height:"auto",
      maxWidth:"100%",
      maxHeight:"95%"
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
