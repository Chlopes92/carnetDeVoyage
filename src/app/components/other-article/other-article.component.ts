import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle, ARTICLE } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-other-article',
  templateUrl: './other-article.component.html',
  styleUrls: ['./other-article.component.css']
})
export class OtherArticleComponent {
  
  otherArticle: IArticle[] = []

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.otherArticle = ARTICLE.filter(article => article.id === Number(id));

    this.otherArticle = ARTICLE.filter(article => !article.topOfPage);
  }

}
