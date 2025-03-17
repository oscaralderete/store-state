<script>
	import { onMount } from "svelte";

	import Loader from "../components/Loader.svelte";
	import ProductDetail from "../components/ProductDetail.svelte";

	import { products } from "../store/products";
	import Tools from "../tools";

	console.log("products:", $products);

	onMount(() => {
		if ($products.length === 0) {
			console.log("fetching data...");

			Tools.fetch(Tools.products_endpoint, (res) => {
				$products = res;

				console.log("$products has been populated", $products);

				product = $products.find((i) => i.id == id);
			});
		}
	});

	export let id;

	let product =
		$products.length > 0 ? $products.find((i) => i.id == id) : null;
</script>

{#if product}
	<ProductDetail {product} />
{:else}
	<Loader />
{/if}
