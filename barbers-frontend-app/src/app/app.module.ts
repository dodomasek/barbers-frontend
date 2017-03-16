import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainBodyImageTextComponent } from './main-body-image-text/main-body-image-text.component';
import { MainBodyAboutpageComponent } from './main-body-aboutpage/main-body-aboutpage.component';
import { MainHeadingComponent } from './main-heading/main-heading.component';
import { MainAboutworkComponent } from './main-aboutwork/main-aboutwork.component';
import { MainAboutworkImageComponent } from './main-aboutwork-image/main-aboutwork-image.component';
import { MainHeadingButtonComponent } from './main-heading-button/main-heading-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyImageTextComponent,
    MainBodyAboutpageComponent,
    MainHeadingComponent,
    MainAboutworkComponent,
    MainAboutworkImageComponent,
    MainHeadingButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
