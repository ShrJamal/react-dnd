'use client'

import { MdDelete } from 'react-icons/md'

import useToggleSettings from '~/app/SettingsDialog/useToggleSettings'
import { cardsArray, yDoc } from '~/lib/yjs'

import { useSelectCard } from '../useSelectCard'

type Porps = {
  isHeader: boolean
}
export default function DeleteCardBtn({ isHeader }: Porps) {
  const { selectedCard } = useSelectCard()
  const { toggleSettings } = useToggleSettings()
  return (
    <button
      className="btn btn-sm btn-circle"
      title={isHeader ? 'Delete This Column' : 'Delete This Card'}
      type="button"
      onClick={() => {
        yDoc.transact(() => {
          const idx = cardsArray
            .toArray()
            .findIndex((c) => c.id === selectedCard?.id)
          idx > -1 && cardsArray.delete(idx)
          toggleSettings()
        })
      }}
    >
      <MdDelete size={20} />
    </button>
  )
}
