import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../series.service';

import {Series} from '../series';


@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }

  public series: Array<Series>;

  getSeries(): void {
    this.seriesService.getSeries()
      .subscribe(series => {
        this.series = series;
      });
  }


  getPromedio(series: Series[]): number {
    let totalSeasons: number = 0;
    let numSeries: number = 0;

    series.forEach((seasons) => totalSeasons = totalSeasons + seasons.seasons ,
    numSeries = numSeries++);

    return totalSeasons/numSeries;
  }

  ngOnInit() {
    this.getSeries();
  }

}
