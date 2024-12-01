import { browser } from '$app/environment'
import type { PageLoad } from './$types.js'
import { db } from './db.js'

export const load = (async () => {
	if (browser)
		return {
			messages: await db.messages.toArray(),
		}
	return {
		messages: [],
	}
}) satisfies PageLoad
