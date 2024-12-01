<script lang="ts">
	import type { Message } from 'ai'

	let {
		messages = [],
	}: {
		messages: Message[]
	} = $props()
</script>

<div class="messages">
	{#each messages as message}
		<div>{message.content}</div>
	{/each}
</div>

<style>
	.messages {
		display: flex;
		flex-direction: column;
		position: relative;
		gap: 0.5rem;
	}
</style>
