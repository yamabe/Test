import { Component } from '@angular/core';

import { TestUtils } from 'ag-lib1/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
      var i = new TestUtils();
      let ret = i.test(1001)
      console.log(ret);
  }

  test () {
      var i = new TestUtils();
      let ret = i.test(1002)
      console.log(ret);
  }
}
