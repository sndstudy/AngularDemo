import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import {MainComponent} from './main/main.component';

@NgModule({
  //使用するクラス
  declarations: [
    MainComponent
  ],

  //使用するモジュール
  imports: [
    BrowserModule
  ],

  //DI元となるクラス
  providers: [],

  //最初に起動するコンポーネント
  bootstrap: [MainComponent]
})
export class AppModule { }
