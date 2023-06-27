import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnChanges {
  job_number?:number = undefined;
  po_number?:number = undefined;
  width?:number = undefined;
  stock_code?:number = undefined;
  footage?:number = undefined;
  press = "";
  status = "";

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  clear(){
    this.job_number = undefined;
    this.po_number= undefined;
    this.width = undefined;
    this.stock_code = undefined;
    this.footage = undefined;
    this.press = "";
    this.status = "";

    console.log(this.job_number);
  }
}
