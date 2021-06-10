export interface Post {
  title: string
  text: string
  id?: number
}

export const posts: Post[] = [
  {title: 'Я первый пост',
  text: 'Что-то важное здесь написано',
  id: 1
  },
  {title: 'Я ещё один пост',
  text: 'И я уверен, что во мне написано более важное что-то',
  id: 2
  }
]
