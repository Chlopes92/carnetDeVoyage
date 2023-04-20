import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle, ARTICLE } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  gallery: IArticle[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // this.gallery = ARTICLE.filter(article => article.id === Number(id) && article.secondPicture);
    const article = ARTICLE.find(article => article.id === Number(id));
    if (article) {
      for (let i = 0; i < article.secondPicture.length; i++) {
        this.gallery.push({
          ...article,
          secondPicture: [article.secondPicture[i]]
        });
      }
    }
  }

}


