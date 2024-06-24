import { Notes } from './models/ActiveNote.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  notes = [
    new Notes({
      name: '',
      details: '',
      totalNotes: []
    })
  ]

  /** @type {import('./models/ActiveNote.js').Notes|null} */
  activeNote = null//oadState('journal', Note)
}

export const AppState = createObservableProxy(new ObservableAppState())