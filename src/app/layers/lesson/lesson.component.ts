import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ExamCurrentOccupancyRatesComponent } from '../exam/exam-current-occupancy-rates/exam-current-occupancy-rates.component';
import { ExamDailyOccupancyRatesComponent } from '../exam/exam-daily-occupancy-rates/exam-daily-occupancy-rates.component';
import { ExamListComponent } from '../exam/exam-list/exam-list.component';
import { SubSink } from 'subsink';
import { LessonListComponent } from "./lesson-list/lesson-list.component";
import { NewLessonComponent } from './new-lesson/new-lesson.component';

@Component({
    selector: 'app-lesson',
    standalone: true,
    templateUrl: './lesson.component.html',
    styleUrl: './lesson.component.scss',
    imports: [
        MatSidenavModule,
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
        ExamListComponent,
        ExamCurrentOccupancyRatesComponent,
        ExamDailyOccupancyRatesComponent,
        MatProgressSpinnerModule,
        LessonListComponent
    ]
})
export class LessonComponent {
  isLoading = true;

  constructor(public dialog: MatDialog) {}
  @ViewChild(LessonListComponent)
  childComponent!: LessonListComponent;

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
  newLesson(): void{
    this._subSink.sink = this.dialog.open(NewLessonComponent,{
      width:"auto",
      height:"auto",
      autoFocus:true,
      disableClose:false
    }).afterClosed().subscribe((result) => {
      this.reload();
    });
  }
  ngOnDestroy(): void {
    this._subSink.unsubscribe();
  }
  reload():void{
    this.childComponent.getLessonList();
  }
}
