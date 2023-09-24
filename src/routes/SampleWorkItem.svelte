<script lang="ts">
	export let title: string = '';
	export let description: string = '';
	export let imgUrl: string = '';
	export let githubUrl: string = '';
</script>

<!-- TODO: Lazily load background image! -->
<div
	class="sample-work-item lozad"
	style="--background-image: url({imgUrl})"
	data-toggle-class="work-item-background"
>
	<div class="work-caption">
		<p><b>{title}</b></p>
		<p>{description}</p>
		<p><a href={githubUrl}>View on GitHub</a></p>
	</div>
</div>

<style>
	.work-caption {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		overflow: hidden;
		width: 100%;
		height: 100%;
		opacity: 0;
		font-size: 1em;
		text-align: center;
		transition: 0.2s ease-out all;
		background: rgba(0, 0, 0, 0.5);
	}
	.work-caption:hover {
		opacity: 100;
	}
	.work-caption p {
		margin: 0.5em;
	}

	/*TODO: Avoid the global for this w/ the dynamic classes?*/
	:global(.work-item-background) {
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: var(--background-image);
	}

	.sample-work-item {
		aspect-ratio: 1/1;
	}

	@media (min-width: 1920px) {
		.work-caption {
			font-size: 0.833vw;
		}
	}
</style>
