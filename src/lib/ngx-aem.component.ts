import { Component, OnInit, Input } from '@angular/core';
import { AemService } from './aem.service';

@Component({
  selector: 'ngx-aem',
  template: `
    <div *ngIf="aemService.getValue(key).show">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class NgxAemComponent implements OnInit {

  @Input() key = '';
  @Input() message = '';
  @Input() show = false;
  constructor(public aemService: AemService) { }

  ngOnInit() {
    this.setDefaultValue();
  }

  private setDefaultValue() {
    if (this.key && this.key.trim()) {
      const message = {
          message: this.message,
          show: this.show
      };
      this.aemService.setValue(this.key, message);
    }
  }

}
