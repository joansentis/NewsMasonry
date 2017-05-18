import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';
import { AppRoutingModule } from './routes/app.routing';
import { AppComponent } from './app.component';

import { newsListComponent } from './pages/newsList/newsList.component';
import { newsDetailsComponent } from './pages/newsDetails/newsDetails.component';

import { newsInfoComponent } from './components/newsInfo/newsInfo.component';
import { newsMasonryComponent } from './components/newsMasonry/newsMasonry.component';

import { AppService } from './services/app.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MasonryModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    newsListComponent,
    newsDetailsComponent,
    newsInfoComponent,
    newsMasonryComponent
  ],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }
