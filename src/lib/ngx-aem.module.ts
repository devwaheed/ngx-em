import { NgModule } from '@angular/core';
import { NgxAemComponent } from './ngx-aem.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AemService } from './aem.service';

@NgModule({
  declarations: [NgxAemComponent],
  imports: [
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
