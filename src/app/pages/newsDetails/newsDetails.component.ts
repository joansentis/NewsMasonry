import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../models/news';


@Component({
    moduleId: module.id,
    selector: 'newsDetails',
    templateUrl: 'newsDetails.html',
    styleUrls: ['newsDetails.scss']
})
export class newsDetailsComponent implements OnInit {
    private newsId: string;
    private news: News;
    constructor(private appService: AppService, private route: ActivatedRoute) {
        this.newsId = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.appService.getNewsById(this.newsId).subscribe(news => {
            this.news = (new News(news._id, news.author, news.title, news.description, news.urlToImage, news.publishedAt));
        });
    }
}
