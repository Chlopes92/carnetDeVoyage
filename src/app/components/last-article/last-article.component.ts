import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLE, IArticle } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent {

  lastArticle: IArticle [] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.lastArticle = ARTICLE.filter(article => article.id === Number(id));

    this.lastArticle = ARTICLE.filter(article => article.topOfPage);
  }

}
