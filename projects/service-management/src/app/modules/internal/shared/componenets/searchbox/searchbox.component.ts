import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() className: string = '';
  @Output() searchText = new EventEmitter<string>();
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  patchValue(searchText: string) {
    this.searchForm.patchValue({
      search: searchText || '',
    });
  }

  ngOnInit(): void {}

  onSearchButtonClick() {
    this.searchText.emit(this.searchForm.value.search);
  }
}