import { Component } from '@angular/core';
import { posts, Post } from './posts'
import { PopupService } from './serices/popup.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cats-gallery';

  posts = posts

  constructor(public popupService: PopupService) {
  }

  updatePosts(post: Post) {
    this.posts.push(post)
    post.id = this.posts.indexOf(post) + 1
  }

  removePost(id: number) {
    this.posts = this.posts.filter(item => item.id !== id)
  }
}
