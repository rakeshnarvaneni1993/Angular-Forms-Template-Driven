import { Component } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 married = false;
 haveChildren = false;
 childrenNumber = [];
 childrenData = false;
  maritalStatus(e) {
    e.target.value === 'married' ? this.married = true : this.married = false;
  }
  children(e) {
    e.target.value === 'no' ? this.haveChildren = false : this.haveChildren = true;
  }
  numberOfChildren(e) {
    console.log(e.target.value);
    $('.childrenDetails').html('');
    for (let i = 0; i < e.target.value; i++) {
      this.childrenNumber.push(i);
    }
  }
  onSubmit(f) {
    console.log(f);
    // f.reset();
    }
  }

