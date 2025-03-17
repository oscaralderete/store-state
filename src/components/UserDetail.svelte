<script>
	import { link } from "svelte-routing";

	export let user;
</script>

<h1>User details</h1>

<p>(This page uses <b>Svelte state()</b> to "cache" the fetched data)</p>

<div>
	<table>
		<tbody>
			{#each Object.entries(user) as [attr, value]}
				<tr>
					<td class="capitalize">{attr}:</td>
					<td>
						{#if attr === "address"}
							<span class="capitalize"
								>{value.street}
								{value.number}, {value.city}</span
							>
							- <span>zipcode: {value.zipcode}</span>
						{:else if attr === "name"}
							<span class="capitalize"
								>{value.firstname} {value.lastname}</span
							>
						{:else}
							{value}
						{/if}
					</td>
				</tr>{/each}
		</tbody>
	</table>
</div>

<div class="right">
	<a href="/users" use:link preserveScroll>Go back</a>
</div>
