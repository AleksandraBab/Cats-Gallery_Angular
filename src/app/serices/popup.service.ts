import { Injectable, Input } from '@angular/core';
import { Card, Comment } from '../cards'

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  popupIsOpened: boolean = false

  card: Card = {
    title: '',
    link: '',
    id: 1,
    isLiked: false,
    comments: []
  }

  comment: Comment = {
    text: '',
    date: ''
  }

  openPopup(card: Card): void {
    this.popupIsOpened = !this.popupIsOpened
    this.card = card
  }

  closePopup(): void {
    this.popupIsOpened = !this.popupIsOpened
  }

  likeCard (): void {
    this.card.isLiked = !this.card.isLiked
  }

  addComment(comment: object): void {
    this.card.comments.push(comment)
  }
}
