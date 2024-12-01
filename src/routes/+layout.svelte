<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import Dexie, { type EntityTable } from 'dexie';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();

    // db.ts

interface Message {
  id: number;
  name: string;
  age: number;
}

const db = new Dexie('FriendsDatabase') as Dexie & {
  friends: EntityTable<
    Friend,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  friends: '++id, name, age' // primary key "id" (for the runtime!)
});

export { db };
</script>

<header>
  <h1>Svelte Chat</h1>
</header>

{@render children()}