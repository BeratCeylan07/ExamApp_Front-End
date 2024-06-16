import { Component } from '@angular/core';
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
import { RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { DashboardExamChartComponent } from './Components/dashboard-exam-chart/dashboard-exam-chart.component';
import { DashboardExamListComponent } from './Components/dashboard-exam-list/dashboard-exam-list.component';
import { DashboardStudentListComponent } from "./Components/dashboard-student-list/dashboard-student-list.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [
        RouterOutlet,
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
        DashboardExamListComponent,
        DashboardExamChartComponent,
        DashboardExamChartComponent,
        MatProgressSpinnerModule,
        DashboardStudentListComponent
    ]
})
export class DashboardComponent {
  isLoading = true;
  ngOnInit(): void {
    this.isLoading = true;
  }
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      // handle login success or failure here
    }, 1000);
  }
}
