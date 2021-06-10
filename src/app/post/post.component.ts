import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../posts'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()

  removePost() {
    this.onRemove.emit(this.post.id)
  }

  constructor() {
    this.post = {
      title: '',
      text: '',
      id: 0
    }
  }

}
