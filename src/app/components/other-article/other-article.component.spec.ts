import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherArticleComponent } from './other-article.component';

describe('OtherArticleComponent', () => {
  let component: OtherArticleComponent;
  let fixture: ComponentFixture<OtherArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
