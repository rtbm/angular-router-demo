import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-list-details',
  templateUrl: './articles-list-details.component.html',
  styleUrls: ['./articles-list-details.component.css']
})
export class ArticlesListDetailsComponent implements OnInit {

  constructor(public ActivatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(res => console.log(res));
  }

}
