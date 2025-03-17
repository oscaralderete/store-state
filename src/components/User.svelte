<script>
	import { link } from "svelte-routing";

	export let user;
</script>

<li>
	<section>
		<h2 class="capitalize">{user.name.firstname} {user.name.lastname}</h2>
		<div>{user.email}</div>
	</section>

	<a href={`/users/${user.id}`} use:link>
		<span>Details</span>
	</a>
</li>
