import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListDetailsComponent } from './articles-list-details.component';

describe('ArticlesListDetailsComponent', () => {
  let component: ArticlesListDetailsComponent;
  let fixture: ComponentFixture<ArticlesListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
