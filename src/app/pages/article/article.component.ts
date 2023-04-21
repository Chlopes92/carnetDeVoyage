import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle,ARTICLE } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article!: IArticle;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const travel = ARTICLE.find((article: IArticle) => article.id === id);

    if(travel){
      this.article = travel;
    }

  }

}
