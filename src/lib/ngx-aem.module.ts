import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { NgxAemComponent } from './ngx-aem.component';
import { AemService } from './aem.service';

@NgModule({
  declarations: [NgxAemComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxAemComponent]
})
export class NgxAemModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxAemModule,
      providers: [AemService]
    };
  }
}
