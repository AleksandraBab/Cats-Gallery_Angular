import { Component, OnInit, Input } from '@angular/core';
import { PopupService } from '../serices/popup.service'
import { Comment } from '../cards'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() comment: Comment;

  value: string = ''

  newComment = {}

  constructor(public popupService: PopupService) {
    this.comment = {
      text: '',
      date: ''
    }
  }

  ngOnInit(): void {
  }

  createComment(evt: any) {
    evt.preventDefault();
    this.newComment = {
      text: this.value,
      date: new Date
    }
    this.popupService.addComment(this.newComment)
    this.value = ''
  }

}
