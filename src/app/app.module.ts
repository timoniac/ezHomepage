import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ezHomepage/header/header.component';
import { AboutComponent } from './ezHomepage/about/about.component';
import { FooterComponent } from './ezHomepage/footer/footer.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFontAwesomeModule ],
  declarations: [ AppComponent, HeaderComponent, AboutComponent, FooterComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
