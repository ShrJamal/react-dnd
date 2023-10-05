'use client'

import { ReactNode, useEffect } from 'react'
import { useSetAtom } from 'jotai'

import { cardsArray, ydoc } from '~/lib/yjs'

import { cardsAtom } from './useCardsAtom'

type Props = {
  children: ReactNode
}
export default function YJSProvider({ children }: Props) {
  const setCards = useSetAtom(cardsAtom)
  useEffect(() => {
    cardsArray.observe(() => {
      setCards(cardsArray.toJSON())
    })
    ydoc.whenLoaded.then(() => {
      setCards(cardsArray.toJSON())
    })
  }, [])

  return <>{children}</>
}
