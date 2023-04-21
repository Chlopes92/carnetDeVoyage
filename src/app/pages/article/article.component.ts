import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle,ARTICLE } from 'src/app/mocks/article.mock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  // Le tableau de mon Mock :
  articles: IArticle[] = ARTICLE;

  articleInfo!: IArticle;

  // Configuration de la navigation dans le constructeur:
  constructor(
    private route: ActivatedRoute,
    // Va garder en mémoire l'info de la route paramétrée, (le 'id' de l'URL est l'id de l'article)
    private location: Location
    // Service d'Angular pour intéragir avec le navigateur -> permet de revenir en arrière
    ) { }

    // Configuration du ngOnInit pour la bonne récupération des éléments par id au lancement
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const travel = ARTICLE.find((article: IArticle) => article.id === id);

    if(travel){
      this.articleInfo = travel;
    }
    this.getArticleById();

  }

  //Méthode pour récupérer un article selon son id:
  getArticleById(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Id souhaité :", id);
  }
}
