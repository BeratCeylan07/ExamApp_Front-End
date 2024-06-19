import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecordOfNewstudentComponent } from '../student/record-of-newstudent/record-of-newstudent.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../Services/exam-app-services/app-exam-api.service';
import { RecordOfNewteacherComponent } from './record-of-newteacher/record-of-newteacher.component';

@Component({
    selector: 'app-teacher',
    standalone: true,
    templateUrl: './teacher.component.html',
    styleUrl: './teacher.component.scss',
    imports: [
        MatSidenavModule,
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
        CanvasJSAngularChartsModule,
        MatCardModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        TeacherListComponent
    ]
})
export class TeacherComponent {

  constructor(public dialog: MatDialog, private _examAPIService: AppExamApiService) {}
  isLoading = true;
  lessonListData!: any;
  private _subSink = new SubSink();
  ngOnInit(): void {
    this.isLoading = true;
  }
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      // handle login success or failure here
    }, 1000);
  }
  openDialog() {
    const dialogRef = this.dialog.open(RecordOfNewteacherComponent, {
      autoFocus:true,
      width:"auto",
      height:"auto"
    });
  }
  getLessonList(): void{
    this._subSink.sink = this._examAPIService.get_lessonList().subscribe({
      next: (result) => {
          this.lessonListData = result;
      },
      error: (error) => {

      },
      complete: () => {

      }
    })
  }

}
