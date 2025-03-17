<script>
	import { onMount } from "svelte";

	import Loader from "../components/Loader.svelte";
	import UserDetail from "../components/UserDetail.svelte";

	import { usersState } from "../states/users.svelte";
	import Tools from "../tools";

	console.log("users:", usersState.users);

	onMount(() => {
		if (usersState.users.length === 0) {
			console.log("fetching data...");

			Tools.fetch(Tools.users_endpoint, (res) => {
				usersState.users = res;

				console.log("users has been populated", usersState.users);

				user = usersState.users.find((i) => i.id == id);
			});
		}
	});

	export let id;

	let user =
		usersState.users.length > 0
			? usersState.users.find((i) => i.id == id)
			: null;
</script>

{#if user}
	<UserDetail {user} />
{:else}
	<Loader />
{/if}
