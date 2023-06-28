import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 250, 200, 150],
        backgroundColor: ['#D699E5', '#84AFE6', '#A6FF52', '#EAD67F']
      }

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
