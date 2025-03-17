<script>
	import { onMount } from "svelte";

	import Loader from "../components/Loader.svelte";
	import ProductsList from "../components/ProductsList.svelte";

	import { products } from "../store/products";
	import Tools from "../tools";

	console.log("products:", $products);

	onMount(() => {
		if ($products.length === 0) {
			console.log("fetching data...");

			Tools.fetch(Tools.products_endpoint, (res) => {
				$products = res;

				console.log("$products has been populated", $products);
			});
		}
	});
</script>

{#if $products.length > 0}
	<h1>Products</h1>
	<p>(This page uses <b>Svelte stores</b> to "cache" the fetched data)</p>
	<ProductsList products={$products} />
{:else}
	<Loader />
{/if}
