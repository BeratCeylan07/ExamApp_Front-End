import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AppExamApiService } from '../../../../Services/exam-app-services/app-exam-api.service';
import { SubSink } from 'subsink';
import { MatDialog } from '@angular/material/dialog';
import { ResultMessageBoxDialogComponent } from '../../../result-message-box-dialog/result-message-box-dialog.component';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard-exam-chart',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './dashboard-exam-chart.component.html',
  styleUrl: './dashboard-exam-chart.component.scss',
})
export class DashboardExamChartComponent {
  private _subSink = new SubSink();
  constructor(private _examApiService: AppExamApiService, private dialog: MatDialog) {}
  isLoading = true;
  chart: any;
  chartOptions = {
    data: [
      {
        type: 'pie',
        dataPoints: [],
        animationEnabled: true
      },
    ],
  };
  getChartInstance(chart: object) {
    this.chart = chart;
  }  
  ngOnInit(): void {
    this._subSink.sink = this._examApiService.get_examChartsData().subscribe({
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
