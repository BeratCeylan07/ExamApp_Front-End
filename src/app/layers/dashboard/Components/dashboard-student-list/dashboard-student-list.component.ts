import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
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
import { AppExamApiService } from '../../../../Services/exam-app-services/app-exam-api.service';
import { UserListOfExamSeted } from '../../../../Services/Models/StudentModels/StudentDataModel';
@Component({
  selector: 'app-dashboard-student-list',
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
    CommonModule,
    MatNativeDateModule
  ],
  templateUrl: './dashboard-student-list.component.html',
  styleUrl: './dashboard-student-list.component.scss'
})
export class DashboardStudentListComponent implements AfterViewInit {
  displayedColumns: string[] = ['studentInfo', 'examInfo', 'examSetStatus','examSetDate'];
  dataSource = new  MatTableDataSource<UserListOfExamSeted>();
  progressBarMode: 'indeterminate' | 'determinate' = 'indeterminate';
  progressBarValue: number = 40;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dashboardApiService: AppExamApiService) {}
  
  ngOnInit(): void {
    this.dashboardApiService.get_UserListOfExam_For_Dashboard().subscribe((result) => {
      this.dataSource.data = result;
      this.progressBarMode = 'determinate';
      this.progressBarValue = 100;  // Change to desired value
    }, 
    (error) => {
      this.progressBarMode = 'determinate';
      this.progressBarValue = 100;  // Change to desired value
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
