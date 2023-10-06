import { atom, useAtomValue } from 'jotai'

import { cardsAtom } from '../useCardsAtom'

export const colsAtom = atom((get) => {
  const cards = get(cardsAtom)
  return cards.filter((i) => i.row === 0).sort((a, b) => a.col - b.col)
})
colsAtom.debugLabel = 'columns'

export default function useColsAtom() {
  return useAtomValue(colsAtom)
}
