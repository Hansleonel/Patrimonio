import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'md-toast-empleado',
  templateUrl: './toast-empleado.component.html',
  styleUrls: ['./toast-empleado.component.scss']
})
export class ToastEmpleadoComponent implements OnInit {
  @ViewChild('element', { static: false }) element;
  @ViewChild('dropDown', { static: false }) dropDownListObj;
  public position = { X: 'Right', Y: 'Bottom' };

  onBeforeOpen(e) {
    const progress = e.element.querySelector('.e-toast-progress');
    progress.style.height = (document.getElementById('progressHeight') as any).value + 'px';
    progress.style.backgroundColor = this.dropDownListObj.value;
  }

  onCreate() {
    this.element.show();
  }

  ngOnInit() {}

  btnClick() {
    this.toastShow();
  }

  toastShow() {
    setTimeout(() => {
      this.element.show();
    }, 0);
  }
}
