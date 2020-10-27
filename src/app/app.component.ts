import { Component, OnInit } from '@angular/core';
import { GridService } from './service/grid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  rowClassRules;
  title = 'financial-instruments';

  columnDefs = [
    {field: 'assetClass', sortable: true},
    {field: 'price', sortable: true, cellStyle: this.cellStyle},
    {field: 'ticker', sortable: true}
  ];

  rowData: any;

  constructor(private gridService: GridService) {
  }

  ngOnInit(): void {
    this.rowData = this.gridService.getGridData();
    this.rowClassRules = {
      macro: (params) => {
        return params.data.assetClass === 'Macro';
      },
      equities: (params) => {
        return params.data.assetClass === 'Equities';
      },
      credit: (params) => {
        return params.data.assetClass === 'Credit';
      }
    };
  }

  cellStyle(params): any {
    if (params.value < 0) {
      return {color: '#ff0000'};
    }
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const sortModel = [
      {colId: 'assetClass', sort: 'desc'}
    ];
    this.gridApi.setSortModel(sortModel);
  }
}
