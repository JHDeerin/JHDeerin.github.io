<script lang="ts">
	import ContactIcons from './ContactIcons.svelte';
</script>

<div id="contact" class="subpage">
	<!-- TODO: Lazily load background image! -->
	<div class="parallax-background" />
	<header id="contact-header" class="header-box">
		<h1>Let's have a talk</h1>
		<p>
			Have a question, concern, or just want to get in touch? No matter what, I'd love to hear from
			you.
		</p>
		<ContactIcons class="contact-icons" />
		<img src="/assets/img/jake_signature_white.png" alt="Jake Deerin" />
	</header>
</div>

<style>
	.parallax-background {
		background: url(/assets/img/contactPhoto.jpg) no-repeat scroll center center/cover;
		height: 100%;
	}

	#contact-header {
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 60vw;
		text-align: center;
		font-size: 3vh;
	}
	#contact-header h1 {
		font-size: 5.925vh;
		margin-bottom: 5vh;
	}
	#contact-header img {
		width: 60%;
	}
	#contact-header :global(.contact-icons) {
		display: flex;
	}
	#contact-header :global(.contact-icons svg) {
		margin: 3.125vh;
		width: 10vh;
		height: 10vh;
	}

	@media (max-width: 850px) {
		#contact-header {
			font-size: 1.2em;
		}
		#contact-header h1 {
			font-size: 2em;
		}
		#contact-header img {
			width: 100%;
		}
	}
</style>
