<script>
	import Product from "./Product.svelte";

	export let products;
</script>

<ul class="list">
	{#each products as product}
		<Product {product} />
	{/each}
</ul>
