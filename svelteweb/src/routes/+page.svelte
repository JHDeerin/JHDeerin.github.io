<script>
	import { onMount } from 'svelte';
	import lozad from 'lozad';

	import HomePage from './HomePage.svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	import AboutPage from './AboutPage.svelte';
	import ResumePage from './ResumePage.svelte';
	import WorksPage from './WorksPage.svelte';
	import ContactPage from './ContactPage.svelte';

	let observer;

	onMount(() => {
		observer = lozad('.lozad', {
			root: document.getElementById('main'),
			rootMargin: '3000px' // load when 3000px away (yes, alot, but it's actually a similar threshold to the native HTML lazy loader on Chrome)
		});
		observer.observe();
	});
</script>

<main id="main" class="parallax-container">
	<NavbarMenu selected="Home" />
	<HomePage />
	<AboutPage />
	<ResumePage />
	<WorksPage />
	<ContactPage />
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
