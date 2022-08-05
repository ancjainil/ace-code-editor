import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular 6';
  @ViewChild('editor') editor;

  ngAfterViewInit() {
    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2,
    });

    this.editor.mode = 'javascript';
    this.editor.value = `function testThis() {
  console.log("it's working!")
}`;

    this.editor.getEditor().commands.addCommand({
      name: 'showOtherCompletions',
      bindKey: 'Ctrl-.',
      exec: function (editor) {},
    });
  }

  getValue() {
    localStorage.setItem('editor', this.editor.value);
    console.log('editor');
    console.log(localStorage);
  }
}
