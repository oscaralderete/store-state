<script>
	import { Router, Route } from "svelte-routing";

	import Home from "./routes/Home.svelte";
	import Products from "./routes/Products.svelte";
	import Product from "./routes/Product.svelte";
	import Users from "./routes/Users.svelte";
	import User from "./routes/User.svelte";

	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";

	export let url = "";
</script>

<Router {url}>
	<Header />

	<main>
		<Route path="/users/:id" component={User} />
		<Route path="/users" component={Users} />
		<Route path="/products/:id" component={Product} />
		<Route path="/products" component={Products} />
		<Route path="/"><Home /></Route>
	</main>

	<Footer />
</Router>
