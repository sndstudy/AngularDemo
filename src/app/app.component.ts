import { Component } from '@angular/core';

@Component({

  //HTMLの出力先を指定 この場合は<app-root>になる
  selector: 'app-root',

  //HTMLテンプレートファイルの指定
  templateUrl: './app.component.html',
  
  //CSSファイルの指定
  styleUrls: ['./app.component.css']
})

//componentクラスの定義
export class AppComponent {
  title = 'testAngular';
}
