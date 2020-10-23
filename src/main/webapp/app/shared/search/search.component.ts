import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

interface Item {
  value: string;
  name: string;
  selected?: boolean;
  detail?: any;
}

@Component({
  selector: 'md-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  itemSelected: Item;
  data: any[] = [];
  formControl = new FormControl();
  isHidden = true;
  @Input() placeholder = 'Search';
  @Input() spinner = false;

  @Input() set required(req: boolean) {
    if (req) {
      this.formControl.setValidators([Validators.required]);
    }
  }

  @Input() set item(item: Item) {
    this.itemSelected = item;
  }

  @Input() set items(items: Item[]) {
    setTimeout(() => {
      this.data = items.map(r => {
        if (this.itemSelected) {
          r.selected = r.value === this.itemSelected.value;
        }
        return r;
      });
    }, 20);
  }

  @Input() hasNextPage: boolean;
  @Output() textChange = new EventEmitter<any>();
  @Output() nextPage = new EventEmitter<void>();
  @Output() valueChange = new EventEmitter<Item>();

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isHidden = true;
    }
  }

  toggleList() {
    this.isHidden = !this.isHidden;
  }

  ngOnInit() {
    this.formControl.valueChanges.pipe(debounceTime(300)).subscribe(r => {
      this.onValueChange(r);
    });
  }

  selectInput() {
    if (this.formControl.value) {
      this.isHidden = false;
    }
  }

  onValueChange(val) {
    this.selectInput();
    this.textChange.emit(val);
  }

  onNextPage() {
    this.nextPage.emit();
  }

  onSelectItem(index: number, item: Item) {
    this.data.map(r => {
      return (r.selected = false);
    });
    item.selected = true;
    this.formControl.setValue(item.name, { emitEvent: false });
    const obj: any = { ...item };
    delete obj.selected;
    this.valueChange.emit(obj);
    this.toggleList();
  }
}
