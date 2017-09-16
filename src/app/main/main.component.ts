import { Component } from '@angular/core';

@Component({

  //HTMLの出力先を指定 この場合は<app-root>になる
  selector: 'app-root',

  //HTMLテンプレートファイルの指定
  templateUrl: './main.component.html',
  
  //CSSファイルの指定
  styleUrls: ['./main.component.css']
})

//componentクラスの定義
export class MainComponent {
  title = 'おはようございます';
}
