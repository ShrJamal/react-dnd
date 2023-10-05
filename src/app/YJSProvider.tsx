'use client'

import { ReactNode, useEffect } from 'react'
import { useSetAtom } from 'jotai'

import { cardsArray } from '~/lib/yjs'

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
  }, [])

  return <>{children}</>
}
