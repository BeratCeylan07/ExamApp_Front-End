import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { CommonModule } from '@angular/common';
import { SubSink } from 'subsink';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-exam-user-wp-logs',
  standalone: true,
  imports: [
    CommonModule,
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
    MatCardModule
  ],
  templateUrl: './exam-user-wp-logs.component.html',
  styleUrl: './exam-user-wp-logs.component.scss'
})
export class ExamUserWpLogsComponent implements AfterViewInit  {
  displayedColumns: string[] = ['mesajTarih', 'gonderici','alici', 'mesaj','action'];
  dataSource = new MatTableDataSource<any>(); // Initialize the dataSource
  _isLoading = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialogRef: MatDialogRef<ExamUserWpLogsComponent>,
    @Inject(MAT_DIALOG_DATA) public examUID: string,
    private _examApiservice: AppExamApiService,
    public dialog: MatDialog
  ) {}
  private _subSink = new SubSink();
  ngOnInit(): void {
    this.getMessageLogs();
  }

  getMessageLogs(): void {
    this._subSink.sink = this._examApiservice.get_Wp_Logs(2,this.examUID).subscribe({
      next: (result) => {
        this.dataSource.data = result;
        console.log(result);
      },
      error: (error) => {
        this.dialog.open(ResultMessageBoxDialogComponent,{
          data:{
            title:"Hata Oluştu",
            message:error.message,
          }
        });

      },
      complete: () => {
        this._isLoading = false;
      }
    })
  }
  ngAfterViewInit() {
    // Check if dataSource has been initialized before setting paginator and sort
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  wpMessageReload(): void{
    this._isLoading = true;
    this.getMessageLogs();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  dialogClose(): void{
    this.dialogRef.close();
  }
}
