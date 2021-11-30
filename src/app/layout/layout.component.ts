import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  filterInput: string = '';
  posts: Post[] = [];

  itemsPerPage = 5;
  currentPage = 1;

  constructor(
    private post: PostService
  ) { }

  ngOnInit(): void {
    this.post.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onPageChange(event: number): void {
    this.currentPage = event;
  }

}
