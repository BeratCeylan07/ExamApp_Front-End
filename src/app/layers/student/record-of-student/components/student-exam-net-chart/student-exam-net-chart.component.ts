import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../../../Services/exam-app-services/app-exam-api.service';
import { ResultMessageBoxDialogComponent } from '../../../../result-message-box-dialog/result-message-box-dialog.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-student-exam-net-chart',
  standalone: true,
  imports: [
    CanvasJSAngularChartsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './student-exam-net-chart.component.html',
  styleUrl: './student-exam-net-chart.component.scss'
})
export class StudentExamNetChartComponent {
  private _subSink = new SubSink();
  _isLoading = true;
  chart: any;
  constructor(
    public dialogRef: MatDialogRef<StudentExamNetChartComponent>,
    @Inject(MAT_DIALOG_DATA) public studentUID: string,
    private _studentApiservice: AppExamApiService,
    public dialog: MatDialog
  ) {}  
  dataPoints: any = [];
  chartOptions = {
    animationEnabled: true,
		axisY: {
			includeZero: true
		},
		data: [{
			type: "column",
			indexLabelFontColor: "#5A5757",
			dataPoints: [],
      animationEnabled: true
		}],
  };
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  ngOnInit(): void {
    this._subSink.sink = this._studentApiservice.get_examScoreOfStudent(this.studentUID).subscribe({
      next: (result) => {

          const _dataPoints = result.$values.map((x: { label: string; yNet: number; }) => ({
            label:x.label,
            y:x.yNet
          }));
          this.chartOptions.data[0].dataPoints = _dataPoints;
          this.chart.render();
        },
      error: (error) => {
          this.dialog.open(ResultMessageBoxDialogComponent,{
            data:{
              title:"Hata Oluştu",
              message:error.message
            },
            width:"300px",
            height:"300px"
          });
      },
      complete: () => {
        
          this._isLoading = false;
      }
    });

  }
  MatDialogClose(): void{
    this.dialogRef.close();
  }
}
