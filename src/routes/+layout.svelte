<script>
	import '../app.css';

	// Components
    import Navbar from '../components/Navbar.svelte'
</script>

<div class="app">
	<Navbar/>

	<main class="">
		<slot />
	</main>


</div>