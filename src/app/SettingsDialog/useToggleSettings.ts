import { atom, useAtom } from 'jotai'

import { CardType } from '~/lib/types'

import { useSelectCard } from '../Card/useSelectCard'

export const settingsToggleAtom = atom(false)
settingsToggleAtom.debugLabel = 'settingsToggleAtom'

export default function useToggleSettings() {
  const [showSettings, toggle] = useAtom(settingsToggleAtom)
  const { selectCard, selectedCard } = useSelectCard()
  function toggleSettings(card?: CardType) {
    selectCard(card)
    toggle((v) => !v)
  }
  function hideSettings() {
    toggle(false)
  }
  return {
    showSettings,
    selectedCard,
    toggleSettings,
    hideSettings,
  }
}
