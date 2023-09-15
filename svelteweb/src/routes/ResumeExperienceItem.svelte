<script lang="ts">
	export let workplace: string = '';
	export let workplaceLink: string = '';
	export let location: string = '';
	export let startTime: string = '';
	export let endTime: string = '';
	export let position: string = '';
	export let descriptions: Array<string> = [];
</script>

<div>
	<a href={workplaceLink}><b>{workplace}</b></a>{#if location}<span>, {location}</span>{/if}
	<ul>
		{#if startTime}<li>{startTime} – {endTime}</li>{/if}
		{#if position}<li><i>{position}</i></li>{/if}
		{#each descriptions as desc (desc)}
			<li>
				– {desc}
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		margin-top: 1em;
		margin-bottom: 1em;
	}
</style>
