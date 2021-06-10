import { Component, OnInit, Input } from '@angular/core';
import { PopupService } from '../serices/popup.service'
import { Comment } from '../cards'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor(public popupService: PopupService) {
    this.comment = {
      text: '',
      date: ''
    }
  }

  ngOnInit(): void {
  }

}
