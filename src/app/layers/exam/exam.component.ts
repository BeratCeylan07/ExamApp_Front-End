import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ExamListComponent } from './exam-list/exam-list.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExamCurrentOccupancyRatesComponent } from "./exam-current-occupancy-rates/exam-current-occupancy-rates.component";
import { ExamDailyOccupancyRatesComponent } from "./exam-daily-occupancy-rates/exam-daily-occupancy-rates.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewExamDialogComponent } from './new-exam-dialog/new-exam-dialog.component';
import { SubSink } from 'subsink';

@Component({
    selector: 'app-exam',
    standalone: true,
    templateUrl: './exam.component.html',
    styleUrl: './exam.component.scss',
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
        MatProgressSpinnerModule
    ]
})
export class ExamComponent {
    isLoading = true;
    constructor(public dialog: MatDialog) {}
    @ViewChild(ExamListComponent)
    childComponent!: ExamListComponent;

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

    newExamDialog(){
      this._subSink.sink = this.dialog.open(NewExamDialogComponent, {
        autoFocus:true,
        width:"90%",
        height:"auto"
      }).afterClosed().subscribe(result => {
        this.childComponent.getExamList();
      });

    }
    ngOnDestroy(): void {
      this._subSink.unsubscribe();
    }
}
