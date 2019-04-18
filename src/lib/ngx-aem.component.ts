import { Component, OnInit, Input } from '@angular/core';
import { AemService } from './aem.service';

@Component({
  selector: 'lib-ngx-aem',
  template: `
    <div>
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

  private setDefaultValue(){
    if(this.key && this.key.trim()){
      const message = {
          message: this.message,
          show: this.show
      };
      this.aemService.setValue(this.key, message);
    }
  }

}
