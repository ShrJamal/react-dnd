'use client'

import { ReactNode, useEffect } from 'react'
import { useSetAtom } from 'jotai'
import { nanoid } from 'nanoid'
import YPartyKitProvider from 'y-partykit/provider'
import * as Y from 'yjs'

import { CardType } from '~/lib/types'
import { cardsArray, yDoc } from '~/lib/yjs'

import { cardsAtom } from './useCardsAtom'

type Props = {
  children: ReactNode
  initCards: CardType[]
}

export default function YJSProvider({ children }: Props) {
  const setCards = useSetAtom(cardsAtom)

  useEffect(() => {
    const yProvider = new YPartyKitProvider(
      process.env.NEXT_PUBLIC_PARTKIT_HOST!,
      'reactDND',
      yDoc,
    )
    const awareness = yProvider.awareness
    awareness.setLocalStateField('user', {
      name: nanoid(6),
    })
    function observer(_: Y.YArrayEvent<CardType>, tr: Y.Transaction) {
      setCards(cardsArray.toArray())
    }
    cardsArray.observe(observer)
    return () => {
      cardsArray.unobserve(observer)
    }
  }, [])
  return <>{children}</>
}
