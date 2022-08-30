import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {  HttpClientModule,HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
