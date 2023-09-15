<script>
	import HomePage from './HomePage.svelte';
	import NavbarMenu from './NavbarMenu.svelte';
</script>

<main id="main" class="parallax-container">
	<NavbarMenu selected="Home" />
	<HomePage />
</main>

<style>
	:global(.subpage) {
		display: block;
		position: relative;
		overflow: hidden;
		padding: 1px 0;
		width: 100vw;
		min-height: 100%;
	}

	@media (max-width: 850px) {
		#about .parallax-background {
			height: 33%;
		}

		#resume .parallax-background {
			height: 25%;
		}
	}
</style>
