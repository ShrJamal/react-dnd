import { atom, useSetAtom } from 'jotai'
import { nanoid } from 'nanoid'

import { cardsArray } from '~/lib/yjs'

import { cardsAtom } from '../../useCardsAtom'

const addColAtom = atom(
  () => '',
  (get, set) => {
    const els = get(cardsAtom)
    const cols = els.filter((v) => v.row === 0).sort((a, b) => a.col - b.col)
    const col = cols.length ? cols[cols.length - 1].col + 1 : 0
    const newCol = {
      id: nanoid(8),
      content: 'New Col',
      color: '#FFF4BA',
      col,
      row: 0,
    }
    cardsArray.push([newCol])
  },
)

addColAtom.debugLabel = 'addColAtom'
export default function useAddCol() {
  return useSetAtom(addColAtom)
}
