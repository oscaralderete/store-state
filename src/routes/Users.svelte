<script>
	import { onMount } from "svelte";

	import Loader from "../components/Loader.svelte";
	import UsersList from "../components/UsersList.svelte";

	import { usersState } from "../states/users.svelte";
	import Tools from "../tools";

	console.log("users:", usersState.users);

	onMount(() => {
		if (usersState.users.length === 0) {
			console.log("fetching data...");

			Tools.fetch(Tools.users_endpoint, (res) => {
				usersState.users = [...res];

				console.log("users has been populated", usersState.users);
			});
		}
	});
</script>

{#if usersState.users.length > 0}
	<h1>Users</h1>
	<UsersList users={usersState.users} />
{:else}
	<Loader />
{/if}
