import { Component, OnInit } from '@angular/core';
import { cardList } from '../cards'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  heading: string = 'Усы, лапы, хвост'

  constructor() { }

  cards = cardList

}
