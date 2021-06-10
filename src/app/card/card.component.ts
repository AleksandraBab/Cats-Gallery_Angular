import { Component, Input, Injectable } from '@angular/core';
import { Card } from '../cards'
import { PopupService } from '../serices/popup.service'


@Component({
  selector: '.item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: Card;

  constructor(public popupService: PopupService) {
    this.card = {
      title: '',
      link: '',
      id: 1,
      isLiked: false,
      comments: []
    }
  }

  //openPopup (): void {
  //  console.log(this.card.title)
  //}
}
