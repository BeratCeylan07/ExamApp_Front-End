import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
import { StudentListComponent } from "./student-list/student-list.component";
import { RecordOfNewstudentComponent } from './record-of-newstudent/record-of-newstudent.component';
import { NewStudentModel } from '../../Services/Models/StudentModels/StudentDataModel';
import { RecordOfStudentComponent } from './record-of-student/record-of-student.component';

@Component({
    selector: 'app-student',
    standalone: true,
    templateUrl: './student.component.html',
    styleUrl: './student.component.scss',
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
    ]
})
export class StudentComponent {
  @ViewChild(StudentListComponent)
  childComponent!: StudentListComponent;

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
    const dialogRef = this.dialog.open(RecordOfNewstudentComponent, {
      data:1,
      autoFocus:true,
      width:"500px",
      height:"auto"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.childComponent.getStudentList();
    });
  }
}
