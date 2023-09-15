<script>
	import HomePage from './HomePage.svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	import AboutPage from './AboutPage.svelte';
</script>

<main id="main" class="parallax-container">
	<NavbarMenu selected="Home" />
	<HomePage />
	<AboutPage />
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
		#resume .parallax-background {
			height: 25%;
		}
	}
</style>
