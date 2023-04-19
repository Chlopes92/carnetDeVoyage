import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle, ARTICLE } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent {
  
  articleDetail: IArticle[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.articleDetail = ARTICLE.filter(article => article.id === Number(id) && article.mainPicture);

  }

}
