<script>
	import { link } from "svelte-routing";

	export let product;
</script>

<li>
	<section>
		<h2>{product.title}</h2>
		<div>USD {product.price}</div>
	</section>

	<a href={`/products/${product.id}`} use:link>
		<span>Details</span>
	</a>
</li>
