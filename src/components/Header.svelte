<script>
	import { Link } from "svelte-routing";

	import logo from "../assets/wpe.svg";
</script>

<header>
	<a href="/">
		<img src={logo} alt="logo" />
	</a>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/products">Products</Link>
		<Link to="/users">Users</Link>
	</nav>
</header>
