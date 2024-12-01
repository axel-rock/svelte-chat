<script lang="ts">
	import { enhance } from '$app/forms'
	import { db } from './db.js'
	import { liveQuery } from 'dexie'
	import Messages from '$lib/Messages.svelte'

	const { data } = $props()

	let busy = $state(false)
	// let action: string | undefined = $props()

	let messages = liveQuery(() => db.messages.toArray())

	async function onSubmit({
		formData,
		formElement,
	}: {
		formData: FormData
		formElement: HTMLFormElement
	}) {
		console.log('Submitting form')
		formElement.disabled = true
		busy = true
		await db.messages.add({
			// id: Date.now(),
			content: formData.get('message') as string,
			role: 'user',
		})
		return async ({ result }: { result: any }) => {
			if (result.status !== 200) return console.error('Failed to submit form', result)

			if (!result.data.messages) return console.error('No messages found')

			result.data.messages.forEach((message: any) => {
				db.messages.add(message)
			})

			busy = false
			formElement.reset()
		}
	}
</script>

<Messages messages={$messages} />

<form method="post" use:enhance={onSubmit}>
	<input type="text" name="message" placeholder="Type a message" disabled={busy} />
	<button type="submit" disabled={busy}>Send</button>
</form>
