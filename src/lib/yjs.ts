import { nanoid } from 'nanoid'
import * as Y from 'yjs'

import { CardType } from './types'

// Create a Yjs document to store all shared data for this session
export const yDoc = new Y.Doc({
  guid: nanoid(8),
  autoLoad: true,
})
export const cardsArray = yDoc.getArray<CardType>('cards')
