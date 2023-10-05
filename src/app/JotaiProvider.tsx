'use client'

import { ReactNode, useState } from 'react'
import { createStore } from 'jotai'
import { DevTools } from 'jotai-devtools'
import { Provider } from 'jotai/react'

import { CardType } from '~/lib/types'

import { cardsAtom } from './useCardsAtom'

type Props = {
  children?: ReactNode
  initCards: CardType[]
}
export default function JotaiProvider({ children }: Props) {
  const [store] = useState(() => createStore())
  return (
    <Provider store={store}>
      {children}
      <DevTools store={store} />
    </Provider>
  )
}
