<script>
	import { link } from "svelte-routing";

	import Tools from "../tools";

	const wpe_url = "https://wpe.oscaralderete.com/blog";
</script>

<h1>Home</h1>
<section>
	<p>
		This is a really simple example about how <b>Svelte stores</b> and
		<b>$state()</b> work. Actually in the new Svelte 5 they can coexist without
		problem although the recommendation is to use $state().
	</p>
	<p>
		In this example I'm using both to "cache" the fetched data from an
		external API:
		<br />
		<a href={Tools.products_endpoint} target="_blank"
			><b>{Tools.products_endpoint}</b></a
		>
		<br />
		<a href={Tools.users_endpoint} target="_blank"
			><b>{Tools.users_endpoint}</b></a
		>
	</p>
	<p>
		In the tradditional approach, every user's click on <b>Products</b>
		or <b>Users</b> links will trigger a fetching of the external APIs data
		and that's very unefficient. As I already said this simple example
		"caches" the external data using <b>stores</b> and <b>$states</b>
	</p>
	<p>
		Could it be applied on a production site? Of course, actually on my
		page:
		<br />
		<a href={wpe_url}>{wpe_url}</a>
		<br />
		This approach works fine, but depending of the number of records you'd have
		to extend the storage/state assignment to a paginated info.
	</p>
	<p>
		If you check the code will note the fetch function is (conditionally)
		repeated in <b>Products-Product details</b>
		and <b>Users-User detail</b>, this isn't a violation of the DRY
		principle it's a fallback in case the visitor landing to your site
		directly from a product detail or user detail link like:<br />
		<br />
		<a href="/products/1" use:link><b>ID's 1 product</b></a>
		<br />
		<a href="/users/2" use:link><b>ID's 2 user</b></a>
	</p>
</section>
