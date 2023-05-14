import { Component } from '@angular/core';
import * as data from 'src/app/shared/data.json';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  public dataSource: any = data

  getProperty(item: any, label: string): any {
    const prop = item.Properties.find((p: any) => p.Label === label);
    return prop ? prop.Value : '';
  }
}

