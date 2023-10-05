import YPartyKitProvider from 'y-partykit/provider'
import * as Y from 'yjs'

import { CardType } from './types'

// Create a Yjs document to store all shared data for this session
export const ydoc = new Y.Doc()

// Create a shared array to store the cards
export const cardsArray = ydoc.getArray<CardType>('cards')

// Share the Yjs document with other users via WebRTC
new YPartyKitProvider(process.env.PARTKIT_HOST!, 'reactDND', ydoc)
