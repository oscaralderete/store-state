<script>
	import { link } from "svelte-routing";

	export let product;
</script>

<h1>Product details</h1>

<p>(This page uses <b>Svelte stores</b> to "cache" the fetched data)</p>

<div>
	<table>
		<tbody>
			{#each Object.entries(product) as [attr, value]}
				<tr>
					<td class="capitalize">{attr}:</td>
					<td>
						{#if attr === "image"}
							<!-- svelte-ignore a11y-missing-attribute -->
							<img
								src={value}
								class="product-img"
								title="Product image"
							/>
						{:else if attr === "rating"}
							<span>Rate: {value.rate}</span>
							<span>Count: {value.count}</span>
						{:else}
							{value}
						{/if}
					</td>
				</tr>{/each}
		</tbody>
	</table>
</div>

<div class="right">
	<a href="/products" use:link preserveScroll>Go back</a>
</div>
