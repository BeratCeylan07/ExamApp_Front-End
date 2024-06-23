import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { SubSink } from 'subsink';
import { AppExamApiService } from '../../../Services/exam-app-services/app-exam-api.service';
import { ResultMessageBoxDialogComponent } from '../../result-message-box-dialog/result-message-box-dialog.component';

@Component({
  selector: 'app-lesson-dashboard-chart',
  standalone: true,
  imports: [
    CanvasJSAngularChartsModule,
    MatCardModule
  ],
  templateUrl: './lesson-dashboard-chart.component.html',
  styleUrl: './lesson-dashboard-chart.component.scss'
})
export class LessonDashboardChartComponent {
  @Input() daily!: boolean;
  private _subSink = new SubSink();
  isLoading = true;
  chart: any;
  constructor(private _lessonAPIService: AppExamApiService, private dialog: MatDialog) {}
  dataPoints: any = [];
  chartOptions = {
    data: [
      {
        type: 'doughnut',
        dataPoints: this.dataPoints,
        animationEnabled: true
      },
    ],
  };
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  ngOnInit(): void {
    this._subSink.sink = this._lessonAPIService.get_lessonCharts(this.daily).subscribe({
      next: (result) => {

          const _dataPoints = result.map((x: { label: string; y: number; }) => ({
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
  ngOnDestroy(): void {
    this._subSink.unsubscribe();  
  }
}
