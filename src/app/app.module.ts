import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { GoBackComponent } from './components/go-back/go-back.component';
import { LastArticleComponent } from './components/last-article/last-article.component';
import { OtherArticleComponent } from './components/other-article/other-article.component';
import { SummaryComponent } from './components/summary/summary.component';
import { NoticeComponent } from './components/notice/notice.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    GoBackComponent,
    LastArticleComponent,
    OtherArticleComponent,
    SummaryComponent,
    NoticeComponent,
    GalleryComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
