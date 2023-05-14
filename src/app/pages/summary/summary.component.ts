import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from 'src/app/shared/data.json';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  public dataSource: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = data
    console.log('this.dataSource :>> ', this.dataSource.Datas);
  }
}

