import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';
@Component({
  selector: 'app-exam-daily-occupancy-rates',
  standalone: true,
  imports: [
    MatCardModule,
    CanvasJSAngularChartsModule
  ],
  templateUrl: './exam-daily-occupancy-rates.component.html',
  styleUrl: './exam-daily-occupancy-rates.component.scss'
})
export class ExamDailyOccupancyRatesComponent {
  private _subSink = new SubSink();
  isLoading = true;
  chart: any;
  constructor(private _examAPIService: AppExamApiService, private dialog: MatDialog) {}
  dataPoints: any = [];
  chartOptions = {
    data: [
      {
        type: 'bar',
        dataPoints: this.dataPoints,
        animationEnabled: true
      },
    ],
  };
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  ngOnInit(): void {
    this._subSink.sink = this._examAPIService.get_examChartsDataDaily().subscribe({
      next: (result) => {
        const _dataPoints = result.$values.map((x: { label: string; y: number; }) => ({
          label:x.label,
          y:x.y
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
            width:"auto",
            height:"auto"
          });
      },
      complete: () => {
          this.isLoading = false;
      }
     })
    
  }

}
