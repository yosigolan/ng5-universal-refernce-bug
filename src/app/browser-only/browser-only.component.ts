import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'browser-only',
  templateUrl: './browser-only.component.html',
  styleUrls: ['./browser-only.component.scss']
})
export class BrowserOnlyComponent {

  public constructor(public dragulaService: DragulaService) {
    console.log('getting here the service that does not support universal');

  }
}
