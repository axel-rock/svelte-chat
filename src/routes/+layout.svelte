<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { LayoutData } from './$types.js'

	import '../lib/css/test.css'

	let { data, children }: { data: LayoutData; children: Snippet } = $props()
</script>

<header>
	<h1>Svelte Chat</h1>
</header>

{@render children()}
