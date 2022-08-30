import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pageenglish';
  langs:string[]=[];
  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('en');
    this.translate.addLangs(['es','en','ja']);
    this.langs=this.translate.getLangs()
    this.translate.use('en');
  }
  changeLang(lang: string){
    this.translate.use(lang);
  }
}
