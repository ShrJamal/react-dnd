import ZoomableContainer from '~/components/Zooming/Container'

import AddColFloatingBtn from './Columns/AddColumn/AddColFloatingBtn'
import JotaiProvider from './JotaiProvider'
import KanbanBoard from './Kanban'
import { fetchCards } from './services/fetchCards'
import SettingsDialog from './SettingsDialog'
import YJSProvider from './YJSProvider'

export default async function BoardPage() {
  const cards = await fetchCards()
  return (
    <JotaiProvider>
      <YJSProvider initCards={cards}>
        <div className="flex-1 overflow-scroll board">
          <ZoomableContainer>
            <KanbanBoard />
          </ZoomableContainer>
          <AddColFloatingBtn />
          <SettingsDialog />
        </div>
      </YJSProvider>
    </JotaiProvider>
  )
}
