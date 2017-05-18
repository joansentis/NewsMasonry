import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'newsList',
  template: '<div class="news-list"><newsMasonry [data]="newsList"></newsMasonry></div>',
  styleUrls: ['newsList.scss']
})
export class newsListComponent implements OnInit {

  private newsList: Array<News>;
  constructor(private appService: AppService, private router: Router) {
    this.newsList = [];
  }

  ngOnInit() {
    this.appService.getNews().subscribe(newsList => {
      newsList.map((news: any) => {
        this.newsList.push(new News(news._id, news.author, news.title, news.description, news.urlToImage, news.publishedAt));
      });
    });
  }

}
