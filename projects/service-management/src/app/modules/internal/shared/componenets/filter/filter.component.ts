import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @ViewChild('offcanvasElement') offcanvasElement!: ElementRef;
  @Input() data: any[] = [];
  @Output() onApply = new EventEmitter();
  @Output() onCLear = new EventEmitter();

  intialFilter = {};

  filter: any = _.cloneDeep(this.intialFilter);
  persistedFiter: any = _.cloneDeep(this.intialFilter);

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {}

  addEventListeners() {
    this.offcanvasElement.nativeElement.addEventListeners(
      'show.bs.canvas',
      () => {
        this.filter = _.cloneDeep(this.persistedFiter);
      }
    );
  }

  isSelected(item: any, ids: any[]) {
    return Boolean((ids || []).find((id) => id === item?.id) !== undefined);
  }

  toggleSelection(item: any, key: string) {
    if (!this.filter[key]) this.filter[key] = [];

    const foundIndex = this.filter[key]?.findIndex(
      (id: any) => id === item?.id
    );

    foundIndex > -1
      ? this.filter[key].splice(foundIndex, 1)
      : this.filter[key].push(item.id);
  }

  handleApply() {
    this.data.forEach((item) => this.filter[item.key] || []);
    this.persistedFiter = _.cloneDeep(this.filter);
    this.filter = _.cloneDeep(this.intialFilter);

    this.onApply.emit(this.persistedFiter);
  }

  clearAll() {
    this.filter = this.persistedFiter = _.cloneDeep(this.intialFilter);
  }

  handleClear() {
    this.clearAll();
    this.onCLear.emit();
  }
}
