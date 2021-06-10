export interface Card {
  link: string,
  title: string,
  id: number,
  isLiked: boolean,
  comments: Array<any>
}

export interface Comment {
  text: string,
  date: string | Date
}

export const cardList: Card[] = [
  {
    link: '../assets/images/cat-100.jpg',
    title: "Боб",
    id: 1,
    isLiked: true,
    comments: [
      <Comment>{
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: new Date(2021, 5, 15)
      },
      <Comment>{
        text: 'Шикарный кот.',
        date: new Date(2021, 4, 28)
      }
    ]
  },
  {
    link: '../assets/images/cat-101.jpg',
    title: "Мэри",
    id: 2,
    isLiked: true,
    comments: [
      <Comment>{
        text: 'Отличный снимок!',
        date: new Date(2021, 4, 13)
      }
    ]
  },
  {
    link: '../assets/images/cat-102.jpg',
    title: "Альфред",
    id: 3,
    isLiked: false,
    comments: []
  },

  {
    link: '../assets/images/cat-103.jpg',
    title: "Глори",
    id: 4,
    isLiked: true,
    comments: [
      <Comment>{
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: new Date(2021, 5, 18)
      },
      <Comment>{
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: new Date(2021, 6, 1)
      },
      <Comment>{
        text: 'Lorem ipsum dolor sit amet.',
        date: new Date(2021, 6, 4)
      },
    ]
  },
  {
    link: '../assets/images/cat-104.jpg',
    title: "Маша",
    id: 5,
    isLiked: false,
    comments: []
  },
  {
    link: '../assets/images/cat-105.jpg',
    title: "Марк",
    id: 6,
    isLiked: false,
    comments: []
  },
  {
    link: '../assets/images/cat-106.jpg',
    title: "Алекс",
    id: 7,
    isLiked: true,
    comments: []
  },
  {
    link: '../assets/images/cat-107.jpg',
    title: "Элис",
    id: 8,
    isLiked: false,
    comments: []
  },
  {
    link: '../assets/images/cat-108.jpg',
    title: "Джо",
    id: 9,
    isLiked: true,
    comments: []
  },
  {
    link: '../assets/images/cat-109.jpg',
    title: "Мила",
    id: 10,
    isLiked: true,
    comments: []
  },
  {
    link: '../assets/images/cat-110.jpg',
    title: "Джон",
    id: 11,
    isLiked: false,
    comments: []
  },
  {
    link: '../assets/images/cat-111.jpg',
    title: "Кыся",
    id: 12,
    isLiked: true,
    comments: [
      <Comment>{
      text: 'Замечательная работа! Хочу такого же кота!',
      date: new Date(2021, 5, 15)
    }
  ]
  }
]
