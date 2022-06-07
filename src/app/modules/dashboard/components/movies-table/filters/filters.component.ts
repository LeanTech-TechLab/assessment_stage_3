import { Component, OnInit } from '@angular/core';
import {MovieListResponse} from "@app-models/type.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  typeForm: FormControl
  types: MovieListResponse[];
  constructor() {
    this.typeForm = new FormControl('')
    this.types = [
      {
        value: '1',
        label: 'Option 1'
      },
      {
        value: '2',
        label: 'Option 2'
      },
      {
        value: '3',
        label: 'Option 3'
      }
    ]
    this.typeForm.valueChanges.subscribe( (result) => {
      console.log('result', result);
    })
  }

  ngOnInit(): void {
  }

}
