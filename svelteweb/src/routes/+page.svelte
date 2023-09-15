<script>
	import HomePage from './HomePage.svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	import AboutPage from './AboutPage.svelte';
	import ResumePage from './ResumePage.svelte';
</script>

<main id="main" class="parallax-container">
	<NavbarMenu selected="Home" />
	<HomePage />
	<AboutPage />
	<ResumePage />
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
</style>
