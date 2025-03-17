<script>
	import User from "./User.svelte";

	export let users;
</script>

<ul class="list">
	{#each users as user}
		<User {user} />
	{/each}
</ul>
