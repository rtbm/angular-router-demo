import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesListDetailsComponent } from './articles-list-details/articles-list-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ArticlesListComponent,
      },
      {
        path: ':id/details',
        component: ArticlesListComponent,
        children: [
          {
            path: '',
            component: ArticlesListDetailsComponent,
            outlet: 'column',
          },
        ],
      },
    ]),
  ],
  declarations: [ArticlesListComponent, ArticlesListDetailsComponent]
})
export class ArticlesModule { }
