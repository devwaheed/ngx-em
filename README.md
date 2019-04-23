# NgxAem

A simple libary for show error messages

## Example

First import ngx-aem module in root of your app 

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxAemModule } from 'ngx-aem';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAemModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In Template
```
<ngx-aem key='noresult'>world is funny</ngx-aem>
```

In Component

```
import { Component } from '@angular/core';
import { AemService } from 'ngx-aem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private aemService: AemService) {
  }

  toggleError() {
    this.aemService.show('noresult');
  }
}
```

Thats all you need to use this library. Have fun

## API

### Aem Service

Method | Description
------------ | -------------
show(keyName) |  show  message 
hide(keyName) | hide  message
toggleMessage(keyName) | toggle  message

### Aem Message Component
```
  <ngx-aem key="'keyName'">message</ngx-aem>
```
Note: keyName is required
