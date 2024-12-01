import type { Message } from 'ai'
import { Dexie, type EntityTable } from 'dexie'

const db = new Dexie('MessagesDatabase') as Dexie & {
	messages: EntityTable<
		Message,
		'id' // primary key "id" (for the typings only)
	>
}

// Schema declaration:
db.version(1).stores({
	messages: '++id, role, content', // primary key "id" (for the runtime!)
})

export type { Message }

export { db }
