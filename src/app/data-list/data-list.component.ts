import {Component, OnInit} from '@angular/core';
import { faPen, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit{

  data: Array<{"job": number, "width": number, "po": number, "footage": number, "press": string, "status": string, "stock": number}> = [];
  editing = false;
  faPen = faPen;
  faFloppyDisk = faFloppyDisk;

  ngOnInit(): void {
    fetch('/assets/data.json').then(res => res.json())
      .then(jsonData => {
        this.data = jsonData;
      });

    setTimeout(() => { this.ngOnInit() }, 1000 * 300)
  }

  editData(editableData:{"job": number, "width": number, "po": number, "footage": number, "press": string, "status": string, "stock": number}){
    document.getElementsByClassName('edit_'+editableData.job)[0].classList.add('edit');
  }

  saveData(editableData:{"job": number, "width": number, "po": number, "footage": number, "press": string, "status": string, "stock": number}){
    document.getElementsByClassName('edit_'+editableData.job)[0].classList.remove('edit');
  }

  protected readonly document = document;
}
