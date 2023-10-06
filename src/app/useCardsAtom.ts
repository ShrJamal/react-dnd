import { atom, useAtomValue } from 'jotai'

import { CardType } from '~/lib/types'

export const cardsAtom = atom<CardType[]>([])

cardsAtom.debugLabel = 'cardsAtom'
export default function useCardsAtom() {
  const cards = useAtomValue(cardsAtom)
  return cards
}

export function useColCards(col: number) {
  const cards = useAtomValue(cardsAtom)
  return cards.filter((v) => v.col === col)
}
