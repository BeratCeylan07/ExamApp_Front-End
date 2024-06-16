import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecordOfNewstudentComponent } from '../student/record-of-newstudent/record-of-newstudent.component';
import { NewUserSetComponent } from '../common-components/new-user-set/new-user-set.component';
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

@Component({
  selector: 'app-teacher',
  standalone: true,
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
    StudentListComponent
  ],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {

  constructor(public dialog: MatDialog) {}
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
  openDialog() {
    const dialogRef = this.dialog.open(NewUserSetComponent, {
      autoFocus:true,
      width:"500px",
      height:"auto"
    });
  }
}
