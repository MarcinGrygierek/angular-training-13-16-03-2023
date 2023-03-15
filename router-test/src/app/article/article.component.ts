import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleId: string = '';
  articleDynamicId: string = '';

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    this.articleId = this.actRoute.snapshot.params['id'];
    this.actRoute.params.subscribe(newParams => {
      this.articleDynamicId = newParams['id'];
    })
   }

   goToXYZ() {
    this.router.navigate(['blog', 'xyz']);
    // this.router.navigate(['blog/xyz']);
   }

  ngOnInit(): void {
  }

}
