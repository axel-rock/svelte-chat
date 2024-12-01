import { json, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types.js'

export const load = (async () => {
	return {}
}) satisfies PageServerLoad

export const actions = {
	default: async () => {
		console.log('Hello from +page.server.ts')
		// wait for 2 seconds
		await new Promise((resolve) => setTimeout(resolve, 2000))
		return {
			messages: [{ content: 'Hello from +page.server.ts', role: 'assistant' }],
		}
	},
} satisfies Actions
