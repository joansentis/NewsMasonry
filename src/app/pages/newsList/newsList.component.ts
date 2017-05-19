import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'newsList',
  templateUrl: 'newsList.html',
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

  loadNewsJSON() {
    this.appService.getNewsJSON().subscribe(newsJSON => {
      newsJSON.map((news: any) => {
        const newsAux = new News(news._id, news.author, news.title, news.description, news.urlToImage, news.publishedAt);
        this.newsList.push(newsAux);
        this.appService.postNews(newsAux).subscribe();
      });
      location.reload();
    });
  }

}
