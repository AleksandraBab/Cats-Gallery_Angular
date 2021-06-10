import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../posts'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput', {static: false}) titleRef: ElementRef

  title: string = ''
  text: string = ''

  constructor(titleRef: ElementRef) {
    this.titleRef = titleRef
  }

  addPost (evt: any) {
    evt.preventDefault();

    if (this.text.length > 2 && this.title.length > 2) {
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)

      this.title = '';
      this.text = ''
    }
  }

  focusTitle() {
    this.titleRef.nativeElement.focus()
  }

}
