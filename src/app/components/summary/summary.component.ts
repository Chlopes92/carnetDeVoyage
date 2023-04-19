import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle, ARTICLE } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  summary: IArticle[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.summary = ARTICLE.filter(article => article.id === Number(id) && article.summary);

  }
}
