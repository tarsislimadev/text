import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <textarea [(ngModel)]="text" autofocus ></textarea>

    <p>Letters: {{ letters }}</p>
    <p>All: {{ all }}</p>
    <p>Without \n: {{ without }}</p>
    <p>Chars: {{ chars }}</p>
    <p>Reverse: {{ reverse }}</p>
  `,
  styles: []
})
export class AppComponent {
  text = '';

  get all () {
    return this.text.length;
  }

  get letters () {
    return this.text.replace(' ', '').split('').length;
  }

  get without () {
    return this.text.replace(/\n|\r/g, '').split('').length;
  }

  get chars () {
    let _return = this.text.split('').reduce(function (chars, char) {
      if (!chars[char])
        chars[char] = 1;
      else
        chars[char]++;
      
      return chars;
    }, {});

    return JSON.stringify(_return);
  }

  get reverse () {
    return this.text.split('').reverse().join('');
  }
}
